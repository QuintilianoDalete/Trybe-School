const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

// console.log(myRemove([1, 2, 3, 4], 3));

// Exercise 2.1
assert.deepEqual((myRemove([1, 2, 3, 4], 3)), [ 1, 2, 4 ]);
// Exercise 2.2
assert.notDeepEqual((myRemove([1, 2, 3, 4], 3)), [1, 2, 3, 4]);
// Exercise 2.4
assert.deepEqual((myRemove([1, 2, 3, 4], 5)), [1, 2, 3, 4]);
