import iterate from './iterate';
import counter from './testingHelpers/counter';

const count = counter();

test('runs with a 1, x 1, returns 3', () => {
  iterate(1, 1, count);
  expect(count(true)).toBe(3);
});
