import { createMachine, assign } from './deps.js';
import { stringify } from './utils.js';

export function createInspectMachine(devTools = globalThis.__xstate__) {
  const serviceMap = new Map();
  const sub = devTools.onRegister(service => {
    serviceMap.set(service.sessionId, service);
  });
  return createMachine({
    initial: 'pendingConnection',
    context: {
      client: undefined
    },
    states: {
      pendingConnection: {},
      connected: {
        on: {
          'service.state': {
            actions: (ctx, e) => ctx.client.send(e)
          },
          'service.event': {
            actions: (ctx, e) => ctx.client.send(e)
          },
          'service.register': {
            actions: (ctx, e) => ctx.client.send(e)
          },
          'service.stop': {
            actions: (ctx, e) => ctx.client.send(e)
          },
          'xstate.event': {
            actions: (_, e) => {
              const {
                event
              } = e;
              const scxmlEventObject = JSON.parse(event);
              const service = serviceMap.get(scxmlEventObject.origin);
              service?.send(scxmlEventObject);
            }
          },
          unload: {
            actions: ctx => {
              ctx.client.send({
                type: 'xstate.disconnect'
              });
            }
          },
          disconnect: 'disconnected'
        }
      },
      disconnected: {
        entry: () => {
          sub.unsubscribe();
        },
        type: 'final'
      }
    },
    on: {
      'xstate.inspecting': {
        target: '.connected',
        actions: [assign({
          client: (_, e) => e.client
        }), ctx => {
          devTools.services.forEach(service => {
            ctx.client?.send({
              type: 'service.register',
              machine: stringify(service.machine),
              state: stringify(service.state || service.initialState),
              sessionId: service.sessionId
            });
          });
        }]
      }
    }
  });
}
