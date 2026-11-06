import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('groups by key', () => {
  assert.deepEqual(
    [...api.groupBy([1, 2, 3, 4], (x) => x % 2)],
    [
      [1, [1, 3]],
      [0, [2, 4]],
    ],
  );
});
test('preserves order within groups', () => {
  assert.deepEqual(api.groupBy(['aa', 'ab', 'ba'], (x) => x[0]).get('a'), ['aa', 'ab']);
});
test('supports empty array', () => {
  assert.equal(api.groupBy([], (x) => x).size, 0);
});
test('passes source index', () => {
  assert.deepEqual(api.groupBy(['a', 'b'], (_, i) => i).get(1), ['b']);
});
test('supports object keys', () => {
  const k = {};
  assert.equal(api.groupBy([1], () => k).get(k)?.[0], 1);
});
test('rejects non-function keyer', () => {
  assert.throws(() => api.groupBy([1], 2), TypeError);
});
