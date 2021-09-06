import { useEffect, useRef, useState } from './deps.js';
import { isActorWithState } from './useActor.js';

const defaultCompare = (a, b) => a === b;

const defaultGetSnapshot = a => isActorWithState(a) ? a.state : undefined;

export function useSelector(actor, selector, compare = defaultCompare, getSnapshot = defaultGetSnapshot) {
  const [selected, setSelected] = useState(() => selector(getSnapshot(actor)));
  const selectedRef = useRef(selected);
  useEffect(() => {
    const updateSelectedIfChanged = nextSelected => {
      if (!compare(selectedRef.current, nextSelected)) {
        setSelected(nextSelected);
        selectedRef.current = nextSelected;
      }
    };

    const initialSelected = selector(getSnapshot(actor));
    updateSelectedIfChanged(initialSelected);
    const sub = actor.subscribe(emitted => {
      const nextSelected = selector(emitted);
      updateSelectedIfChanged(nextSelected);
    });
    return () => sub.unsubscribe();
  }, [selector, compare]);
  return selected;
}
