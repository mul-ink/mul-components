import { useState, useRef, useLayoutEffect } from './deps.js';
import useConstant from './useConstant.js';

export function isActorWithState(actorRef) {
  return 'state' in actorRef;
}

function isDeferredActor(actorRef) {
  return 'deferred' in actorRef;
}

const noop = () => {
  /* ... */
};

function defaultGetSnapshot(actorRef) {
  return 'getSnapshot' in actorRef ? actorRef.getSnapshot() : isActorWithState(actorRef) ? actorRef.state : undefined;
}

export function useActor(actorRef, getSnapshot = defaultGetSnapshot) {
  const actorRefRef = useRef(actorRef);
  const deferredEventsRef = useRef([]);
  const [current, setCurrent] = useState(() => getSnapshot(actorRef));
  const send = useConstant(() => (...args) => {
    const event = args[0];

    if (process.env.NODE_ENV !== 'production' && args.length > 1) {
      console.warn(`Unexpected payload: ${JSON.stringify(args[1])}. Only a single event object can be sent to actor send() functions.`);
    }

    const currentActorRef = actorRefRef.current; // If the previous actor is a deferred actor,
    // queue the events so that they can be replayed
    // on the non-deferred actor.

    if (isDeferredActor(currentActorRef) && currentActorRef.deferred) {
      deferredEventsRef.current.push(event);
    } else {
      currentActorRef.send(event);
    }
  });
  useLayoutEffect(() => {
    actorRefRef.current = actorRef;
    setCurrent(getSnapshot(actorRef));
    const subscription = actorRef.subscribe({
      next: emitted => setCurrent(emitted),
      error: noop,
      complete: noop
    }); // Dequeue deferred events from the previous deferred actorRef

    while (deferredEventsRef.current.length > 0) {
      const deferredEvent = deferredEventsRef.current.shift();
      actorRef.send(deferredEvent);
    }

    return () => {
      subscription.unsubscribe();
    };
  }, [actorRef]);
  return { actor: current, send };
}
