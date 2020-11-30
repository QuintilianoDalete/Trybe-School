const fetchPromisse = () => {
    const myArr = [];

  for (i = 0; i < 10; i++) {
    myArr.push(Math.random() * 50);
  }

  myArr.map(number => number * number);

  console.log(myArr);

}

fetchPromisse();
