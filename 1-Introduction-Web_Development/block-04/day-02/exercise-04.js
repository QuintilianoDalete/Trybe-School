// Is it bigger than 20?

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}

let mean = sum / (numbers.length)

if (mean > 20) {
    console.log('Value bigger than 20');

} else {
    console.log('Value smaller or iqual to 0');
}
