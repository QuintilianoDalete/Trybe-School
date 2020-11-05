const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);
  
  if (number > 10 || number <=5) {
    return reject(number); // The function didn`t run well.
  }
  resolve(number); // The function runned well.
})
// Flow menengers
.then(number => `Such a success =). Our number is ${number}!`) // This function receive the 1 argument wich is the...
// ... 'resolve' return (number).
.then(msg => console.log(msg)) // Chaining - In this case the argument of this function (msg) is the return from the previous...
// ... function (msg === `Such a success =). Our number is ${number}!`).
.catch(number => console.log(`It didn't work well =( Our number is ${number}`)); // The function catch receives...
// ... the return from the reject. When the function returns a reject, it jumps all then functions and is treated by...
// ... by the first found then. The catch takes as well all errors which ocours inside a then function. Because of that...
// ... it is, generally,  positioned at the end.