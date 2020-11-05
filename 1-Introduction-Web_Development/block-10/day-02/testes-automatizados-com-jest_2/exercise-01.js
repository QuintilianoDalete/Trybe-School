const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }

it(`upper case 'test' to equal 'TEST'`, (done) => {
  uppercase('tets', (str) => {
    expect(str).toBe('TEST');
    done();  
  });
});
