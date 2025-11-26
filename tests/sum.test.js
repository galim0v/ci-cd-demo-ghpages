import sum from '../src/js/sum.js';

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('works with negative', () => {
  expect(sum(-1, -2)).toBe(-3);
});
