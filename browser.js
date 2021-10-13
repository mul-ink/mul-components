import { interpret } from './deps.js';
import { createInspectMachine } from './inspectMachine.js';
import { getLazy, isReceiverEvent, parseReceiverEvent, stringify, toSCXMLEvent, toEventObject, toObserver } from './utils.js';

export const serviceMap = new Map();
export function createDevTools() {
  const services = new Set();
  const serviceListeners = new Set();
  return {
    services,
    register: service => {
      services.add(service);
      serviceMap.set(service.sessionId, service);
      serviceListeners.forEach(listener => listener(service));
      service.onStop(() => {
        services.delete(service);
        serviceMap.delete(service.sessionId);
      });
    },
    unregister: service => {
      services.delete(service);
      serviceMap.delete(service.sessionId);
    },
    onRegister: listener => {
      serviceListeners.add(listener);
      services.forEach(service => listener(service));
      return {
        unsubscribe: () => {
          serviceListeners.delete(listener);
        }
      };
    }
  };
}
const defaultInspectorOptions = {
  url: 'https://statecharts.io/inspect',
  iframe: () => document.querySelector('iframe[data-xstate]'),
  devTools: () => {
    const devTools = createDevTools();
    globalThis.__xstate__ = devTools;
    return devTools;
  }
};

const getFinalOptions = options => {
  const withDefaults = { ...defaultInspectorOptions,
    ...options
  };
  return { ...withDefaults,
    url: new URL(withDefaults.url),
    iframe: getLazy(withDefaults.iframe),
    devTools: getLazy(withDefaults.devTools)
  };
};

export function inspect(options = { url: "https://statecharts.io/inspect", iframe: false }) {
  const {
    iframe,
    url,
    devTools
  } = getFinalOptions(options);

  if (iframe === null) {
    console.warn('No suitable <iframe> found to embed the inspector. Please pass an <iframe> element to `inspect(iframe)` or create an <iframe data-xstate></iframe> element.');
    return undefined;
  }

  const inspectMachine = createInspectMachine(devTools);
  const inspectService = interpret(inspectMachine).start();
  const listeners = new Set();
  const sub = inspectService.subscribe(state => {
    listeners.forEach(listener => listener.next(state));
  });
  let targetWindow;
  let client;

  const messageHandler = event => {
    if (typeof event.data === 'object' && event.data !== null && 'type' in event.data) {
      if (iframe && !targetWindow) {
        targetWindow = iframe.contentWindow;
      }

      if (!client) {
        client = {
          send: e => {
            targetWindow.postMessage(e, url.origin);
          }
        };
      }

      const inspectEvent = { ...event.data,
        client
      };
      inspectService.send(inspectEvent);
    }
  };

  window.addEventListener('message', messageHandler);
  window.addEventListener('unload', () => {
    inspectService.send({
      type: 'unload'
    });
  });
  devTools.onRegister(service => {
    inspectService.send({
      type: 'service.register',
      machine: stringify(service.machine),
      state: stringify(service.state || service.initialState),
      sessionId: service.sessionId,
      id: service.id,
      parent: service.parent?.sessionId
    });
    inspectService.send({
      type: 'service.event',
      event: stringify((service.state || service.initialState)._event),
      sessionId: service.sessionId
    });
    const originalSend = service.send.bind(service);

    service.send = function inspectSend(event, payload) {
      inspectService.send({
        type: 'service.event',
        event: stringify(toSCXMLEvent(toEventObject(event, payload))),
        sessionId: service.sessionId
      });
      return originalSend(event, payload);
    };

    service.subscribe(state => {
      // filter out synchronous notification from within `.start()` call when the `service.state` has not yet been assigned
      if (state === undefined) {
        return;
      }

      inspectService.send({
        type: 'service.state',
        state: stringify(state),
        sessionId: service.sessionId
      });
    });
    service.onStop(() => {
      inspectService.send({
        type: 'service.stop',
        sessionId: service.sessionId
      });
    });
  });

  if (iframe) {
    iframe.addEventListener('load', () => {
      targetWindow = iframe.contentWindow;
    });
    iframe.setAttribute('src', String(url));
  } else {
    targetWindow = window.open(String(url), 'xstateinspector');
  }

  return {
    send: event => {
      inspectService.send(event);
    },
    subscribe: (next, onError, onComplete) => {
      const observer = toObserver(next, onError, onComplete);
      listeners.add(observer);
      observer.next(inspectService.state);
      return {
        unsubscribe: () => {
          listeners.delete(observer);
        }
      };
    },
    disconnect: () => {
      inspectService.send('disconnect');
      window.removeEventListener('message', messageHandler);
      sub.unsubscribe();
    }
  };
}
export function createWindowReceiver(options) {
  const {
    window: ownWindow = window,
    targetWindow = window.self === window.top ? window.opener : window.parent
  } = options || {};
  const observers = new Set();
  let latestEvent;

  const handler = event => {
    const {
      data
    } = event;

    if (isReceiverEvent(data)) {
      latestEvent = parseReceiverEvent(data);
      observers.forEach(listener => listener.next(latestEvent));
    }
  };

  ownWindow.addEventListener('message', handler);
  const actorRef = {
    id: 'xstate.windowReceiver',

    send(event) {
      if (!targetWindow) {
        return;
      }

      targetWindow.postMessage(event, '*');
    },

    subscribe(next, onError, onComplete) {
      const observer = toObserver(next, onError, onComplete);
      observers.add(observer);
      return {
        unsubscribe: () => {
          observers.delete(observer);
        }
      };
    },

    stop() {
      observers.clear();
      ownWindow.removeEventListener('message', handler);
    },

    getSnapshot() {
      return latestEvent;
    }

  };
  actorRef.send({
    type: 'xstate.inspecting'
  });
  return actorRef;
}
export function createWebSocketReceiver(options) {
  const {
    protocol = 'ws'
  } = options;
  const ws = new WebSocket(`${protocol}://${options.server}`);
  const observers = new Set();
  let latestEvent;
  const actorRef = {
    id: 'xstate.webSocketReceiver',

    send(event) {
      ws.send(JSON.stringify(event));
    },

    subscribe(next, onError, onComplete) {
      const observer = toObserver(next, onError, onComplete);
      observers.add(observer);
      return {
        unsubscribe: () => {
          observers.delete(observer);
        }
      };
    },

    getSnapshot() {
      return latestEvent;
    }

  };

  ws.onopen = () => {
    actorRef.send({
      type: 'xstate.inspecting'
    });
  };

  ws.onmessage = event => {
    if (typeof event.data !== 'string') {
      return;
    }

    try {
      const eventObject = JSON.parse(event.data);

      if (isReceiverEvent(latestEvent)) {
        latestEvent = parseReceiverEvent(eventObject);
        observers.forEach(observer => {
          observer.next(latestEvent);
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  ws.onerror = err => {
    observers.forEach(observer => {
      observer.error?.(err);
    });
  };

  return actorRef;
}
