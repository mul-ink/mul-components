import { useLayoutEffect, interpret, State } from './deps.js';
import useConstant from './useConstant.js';

function toObserver(nextHandler, errorHandler, completionHandler) {
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

export function useInterpret(getMachine, options = {}, observerOrListener) {
  const machine = useConstant(() => {
    return typeof getMachine === 'function' ? getMachine() : getMachine;
  });

  const {
    context,
    guards,
    actions,
    activities,
    services,
    delays,
    state: rehydratedState,
    ...interpreterOptions
  } = options;
  const service = useConstant(() => {
    const machineConfig = {
      context,
      guards,
      actions,
      activities,
      services,
      delays
    };
    const machineWithConfig = machine.withConfig(machineConfig, () => ({ ...machine.context,
      ...context
    }));
    return interpret(machineWithConfig, {
      deferEvents: true,
      ...interpreterOptions
    });
  });
  useLayoutEffect(() => {
    let sub;

    if (observerOrListener) {
      sub = service.subscribe(toObserver(observerOrListener));
    }

    return () => {
      sub?.unsubscribe();
    };
  }, [observerOrListener]);
  useLayoutEffect(() => {
    service.start(rehydratedState ? State.create(rehydratedState) : undefined);
    return () => {
      service.stop();
    };
  }, []);

  useLayoutEffect(() => {
    Object.assign(service.machine.options.actions, actions);
    Object.assign(service.machine.options.guards, guards);
    Object.assign(service.machine.options.activities, activities);
    Object.assign(service.machine.options.services, services);
    Object.assign(service.machine.options.delays, delays);
  }, [actions, guards, activities, services, delays]);
  return service;
}
