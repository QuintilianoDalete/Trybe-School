const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// Exercise 1.1
assert.equal(sum(4, 5), 9);
// Exercise 1.2
assert.equal(sum(0, 0), 0);
// Exercise 1.3
return sum(4, "5");
