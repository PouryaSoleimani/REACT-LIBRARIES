//^ UTILS TEST FILE
//? IMPORTS
const { sum, power, minus, clone } = require('./utils.js')



//! TESTS
test('test Sum Function', () => { expect(sum(2, 3)).toBe(5) });

test('test Power function', () => { expect(power(4, 4)).toBe(16) });

test('test Minus Function', () => { expect(minus(10, 4)).toBe(6) })

test('test Clone Function', () => {
  const array = [1, 2, 3]
  expect(clone(array)).toStrictEqual(array)
  // expect(clone(array)).toEqual(array) --> THIS IS JUST THE SAME AS {toStrictEqual}
  // expect(clone(array)).toBe(array) --> IF WE DIDNT USE THE {SPREAD SYNTAX} [...array] , WE COULD USE THIS
})