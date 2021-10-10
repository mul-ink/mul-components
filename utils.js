import { createMachine } from './deps.js';

export function getLazy(value) {
  return typeof value === 'function' ? value() : value;
}

export function stringify(value) {
  return JSON.stringify(value);
}

export function isReceiverEvent(event) {
  if (!event) {
    return false;
  }

  try {
    if (typeof event === 'object' && 'type' in event && event.type.startsWith('service.')) {
      return true;
    }
  } catch (e) {
    return false;
  }

  return false;
}
export function parseState(stateJSON) {
  const state = State.create(JSON.parse(stateJSON));
  delete state.history;
  return state;
}
export function parseReceiverEvent(event) {
  switch (event.type) {
    case 'service.event':
      return { ...event,
        event: JSON.parse(event.event)
      };

    case 'service.register':
      return { ...event,
        machine: createMachine(JSON.parse(event.machine)),
        state: parseState(event.state)
      };

    case 'service.state':
      return { ...event,
        state: parseState(event.state)
      };

    default:
      return event;
  }
}

export function partition(items, predicate) {
    const [truthy, falsy] = [[], []]
    for (const item of items) {
      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
    return [truthy, falsy];
}

export function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  const eventObject = toEventObject(event);
  return {
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external',
    ...scxmlEvent
  };
}

export function toEventObject(event, payload) {
  if (isString(event) || typeof event === 'number') {
    return {
      type: event,
      ...payload
    };
  }

  return event;
}

export function toObserver(nextHandler, errorHandler, completionHandler) {
  if (typeof nextHandler === 'object') {
    return nextHandler;
  }

  const noop = () => void 0;

  return {
    next: nextHandler,
    error: errorHandler || noop,
    complete: completionHandler || noop
  };
}

export function isString(value) {
  return typeof value === 'string';
}
