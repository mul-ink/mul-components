import { useEffect, useRef, useLayoutEffect } from './deps.js';
import { partition } from './utils.js';

export function useEffectActions(service) {
  const effectActionsRef = useRef([]);
  const layoutEffectActionsRef = useRef([]);

  useLayoutEffect(() => {
    const sub = service.subscribe((currentState) => {
      if (currentState.actions.length) {
        const reactEffectActions = currentState.actions.filter(
          (action) => {
            return (
              typeof action.exec === 'function' &&
              '__effect' in (action).exec
            );
          }
        );

        const [effectActions, layoutEffectActions] = partition(
          reactEffectActions,
          (action) => {
            return action.exec.__effect === ReactEffectType.Effect;
          }
        );

        effectActionsRef.current.push(
          ...effectActions.map(
            (effectAction) => [effectAction, currentState]
          )
        );

        layoutEffectActionsRef.current.push(
          ...layoutEffectActions.map(
            (layoutEffectAction) => [layoutEffectAction, currentState]
          )
        );
      }
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  useLayoutEffect(() => {
    while (layoutEffectActionsRef.current.length) {
      const [
        layoutEffectAction,
        effectState
      ] = layoutEffectActionsRef.current.shift();

      executeEffect(layoutEffectAction, effectState);
    }
  });

  useEffect(() => {
    while (effectActionsRef.current.length) {
      const [effectAction, effectState] = effectActionsRef.current.shift();
      executeEffect(effectAction, effectState);
    }
  });
}

function executeEffect(
  action,
  state
) {
  const { exec } = action;
  const originalExec = exec(state.context, state._event.data, {
    action,
    state,
    _event: state._event
  });

  originalExec();
}
