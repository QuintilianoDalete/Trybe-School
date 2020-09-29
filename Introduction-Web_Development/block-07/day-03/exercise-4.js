const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// Exercise 4.1
assert.deepEqual((myFizzBuzz(15)), "fizzbuzz");
// Exercise 4.2
assert.deepEqual((myFizzBuzz(9)), "fizz");
// Exercise 4.3
assert.deepEqual((myFizzBuzz(5)), "buzz");
// Exercise 4.4
assert.deepEqual((myFizzBuzz(2)), 2);
// Exercise 4.5
assert.deepEqual((myFizzBuzz('God')), false);
