import { useState, useCallback, State } from './deps.js'
import { useInterpret } from './useInterpret.js'


export function useMachine(getMachine, options = {}) {
  const listener = useCallback(nextState => {

    const initialStateChanged = nextState.changed === undefined && Object.keys(nextState.children).length;

    if (nextState.changed || initialStateChanged) {
      setState(nextState);
    }

  }, []);
  const service = useInterpret(getMachine, options, listener);
  const [state, setState] = useState(() => {
    const {
      initialState
    } = service.machine;
    return options.state ? State.create(options.state) : initialState;
  });
  return { state, send: service.send, service };
}
