export function groupBy<T, K>(
  items: readonly T[],
  keyOf: (item: T, index: number) => K,
): Map<K, T[]> {
  if (!Array.isArray(items) || typeof keyOf !== 'function')
    throw new TypeError('Expected array and key function');
  const groups = new Map<K, T[]>();
  items.forEach((item, index) => {
    const key = keyOf(item, index),
      group = groups.get(key);
    if (group) group.push(item);
    else groups.set(key, [item]);
  });
  return groups;
}
