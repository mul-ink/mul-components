  
import { interpret, useLayoutEffect } from './deps.js';
import useConstant from './useConstant.js';
import { useEffectActions } from './useEffectActions.js';

function toObserver(
  nextHandler,
  errorHandler,
  completionHandler
){
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

export function useInterpret(
  getMachine,
  observerOrListener
) {
  const machine = useConstant(() => {
    return typeof getMachine === 'function' ? getMachine() : getMachine;
  });

  const service = useConstant(() => {
    const machineWithConfig = machine.withConfig({}, () => ({
      ...machine.context
    }));

    return interpret(machineWithConfig, {
      deferEvents: true
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
    service.start();

    return () => {
      service.stop();
    };
  }, []);

  useEffectActions(service);

  return service;
}