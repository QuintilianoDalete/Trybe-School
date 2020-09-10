function decode(string) {
    let array = string.split('');
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] == 1) {
        array[i] = 'a';
      } else if (array[i] == 2) {
        array[i] = 'e';
      } else if (array[i] == 3) {
        array[i] = 'i';
      } else if (array[i] == 4) {
        array[i] = 'o';
      } else if (array[i] == 5) {
        array[i] = 'u';
      }
    }
    return array.join('');
  }

  console.log(decode("How 1re you tod1y?"));