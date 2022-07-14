import counter from './counter';

test('runs twice, returns 2', () => {
  const count = counter();
  count();
  count();
  expect(count(true)).toBe(2);
});

test('runs zero times, returns 0', () => {
  const count = counter();
  expect(count(true)).toBe(0);
});

test('runs 100 times, returns 100', () => {
  const count = counter();
  for (let i = 0; i < 100; i++) count();
  expect(count(true)).toBe(100);
});
