const myRemoveWithoutCopy = require('./exercise-03');

describe ('myRemoveWithoutCopy', () => {
  test('Verify if the expected array is returned', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Returns the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);  
  });
});