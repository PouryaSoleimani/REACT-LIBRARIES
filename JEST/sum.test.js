import sum from '../src/JEST/Jest'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});