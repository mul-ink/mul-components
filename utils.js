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