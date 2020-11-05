// Calculating the arithmetic mean

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}

let mean = sum / (numbers.length);

console.log(mean);