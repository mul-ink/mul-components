import { interpret } from './deps.js';
import { createInspectMachine } from './inspectMachine.js';
import { stringify, toEventObject, toSCXMLEvent } from './utils.js';

const services = new Set();
const serviceMap = new Map();
const serviceListeners = new Set();

function createDevTools() {
  globalThis.__xstate__ = {
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

export function inspect(options) {
  const {
    server
  } = options;
  createDevTools();
  const inspectService = interpret(createInspectMachine(globalThis.__xstate__)).start();
  let client;
  server.on('connection', function connection(wss) {
    client = {
      id: '@@xstate/ws-client',
      send: event => {
        server.clients.forEach(ws => {
          if (ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify(event));
          }
        });
      },
      subscribe: () => {
        return {
          unsubscribe: () => void 0
        };
      },
      getSnapshot: () => undefined
    };
    wss.on('message', function incoming(message) {
      if (typeof message !== 'string') {
        return;
      }

      const jsonMessage = JSON.parse(message);
      inspectService.send({ ...jsonMessage,
        client
      });
    });
  });

  globalThis.__xstate__.onRegister(service => {
    inspectService.send({
      type: 'service.register',
      machine: JSON.stringify(service.machine),
      state: JSON.stringify(service.state || service.initialState),
      id: service.id,
      sessionId: service.sessionId
    });
    inspectService.send({
      type: 'service.event',
      event: stringify((service.state || service.initialState)._event),
      sessionId: service.sessionId
    }); // monkey-patch service.send so that we know when an event was sent
    // to a service *before* it is processed, since other events might occur
    // while the sent one is being processed, which throws the order off

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
    service.subscribe(state => {
      inspectService.send({
        type: 'service.state',
        state: JSON.stringify(state),
        sessionId: service.sessionId
      });
    });
  });

  const inspector = {
    id: '@@xstate/inspector',
    send: event => {
      inspectService.send(event);
    },
    subscribe: () => {
      return {
        unsubscribe: () => void 0
      };
    },
    disconnect: () => {
      server.close();
      inspectService.stop();
    },
    getSnapshot: () => undefined
  };
  server.on('close', () => {
    inspectService.stop();
  });
  return inspector;
}
