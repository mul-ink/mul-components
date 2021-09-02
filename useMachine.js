import { useCallback, useState } from './deps.js';
import { useInterpret } from './useInterpret.js';

export function useMachine(
  getMachine
) {
  const listener = useCallback(
    (nextState) => {
      const initialStateChanged =
        nextState.changed === undefined &&
        Object.keys(nextState.children).length;

      if (nextState.changed || initialStateChanged) {
        setState(nextState);
      }
    }, []);

  const service = useInterpret(getMachine, listener);

  const [state, setState] = useState(() => {
    const { initialState } = service.machine;
    return initialState;
  });

  return { state, send: service.send, service };
}