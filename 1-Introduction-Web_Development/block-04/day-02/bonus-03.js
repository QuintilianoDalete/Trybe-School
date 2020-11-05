// Creating a new array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];

let num = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    if (i <= numbers.length) {
        num = numbers[i] * 2;
        newArray.push(num);

    } else {
        num = numbers[i];
        newArray.push(num * numbers[i+1]);
    }
}

console.log(newArray);