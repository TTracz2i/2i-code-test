import iterate from './iterate';
import counter from './testingHelpers/counter';

test('runs with a 0, x 0, returns 0', () => {
  const count = counter();
  iterate(0, 0, count);
  expect(count(true)).toBe(0);
});

test('runs with a 1, x -1, returns 0', () => {
  const count = counter();
  iterate(1, -1, count);
  expect(count(true)).toBe(0);
});

test('runs with a -1, x 1, returns 0', () => {
  const count = counter();
  iterate(-1, 1, count);
  expect(count(true)).toBe(0);
});

test('runs with a 1, x -100, returns 0', () => {
  const count = counter();
  iterate(1, -100, count);
  expect(count(true)).toBe(0);
});

test('runs with a 1, x 1, returns 3', () => {
  const count = counter();
  iterate(1, 1, count);
  expect(count(true)).toBe(3);
});

test('runs with a 10, x 100, returns 53', () => {
  const count = counter();
  iterate(10, 100, count);
  expect(count(true)).toBe(53);
});

test('runs with a 9, x 13, returns 6', () => {
  const count = counter();
  iterate(9, 13, count);
  expect(count(true)).toBe(6);
});

test('runs with a -1, x -1, returns 3', () => {
  const count = counter();
  iterate(-1, -1, count);
  expect(count(true)).toBe(3);
});
