import { interpret } from "./deps.js";
import { onCleanup, batch } from "https://jspm.dev/solid-js";
import { createStore, reconcile } from "https://jspm.dev/solid-js/store";

export function useMachine(machine, options = {}) {
  const service = interpret(machine, options);

  const [state, setState] = createStore({
    ...service.initialState,
    matches(...args) {
      // access state to track on value access
      state.value;
      return service.state.matches(...args);
    }
  });
  service.onTransition((s) => {
    // only focus on stuff that actually changes
    batch(() => {
      setState("value", s.value);
      // diff data to only update values that changes
      setState("context", reconcile(s.context));
    });
  });

  service.start();
  onCleanup(() => service.stop());

  return [state, service.send];
}
