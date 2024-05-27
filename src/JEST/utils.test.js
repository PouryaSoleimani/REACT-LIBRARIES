//^ UTILS TEST FILE
//? IMPORTS
const { sum, power, minus } = require('./utils.js')



//! TESTS
test('test sum Function', () => { expect(sum(2, 3)).toBe(5) });

test('test power function', () => { expect(power(4, 4)).toBe(16) });

test('test Minus Function', () => { expect(minus(10, 4)).toBe(6) })