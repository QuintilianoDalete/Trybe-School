const myRemove = require('./exercise-02');

describe ('myRemove', () => {
  test('Returns a new array without the number defined by the paramenter "item"', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verify if the function call myRemove([1, 2, 3, 4], 3), returns the correct array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Does not change the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('Returns a new array without the number defined by the paramenter "item"', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});