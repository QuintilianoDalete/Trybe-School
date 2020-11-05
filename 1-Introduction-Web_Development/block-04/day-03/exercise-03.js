// Inverting the ladder

let n = 5;

let array = [];

let string = ' ';

let star = '*';

for (let i = 0; i < n; i += 1) {

    array.push(string.repeat(n - (i + 1)));

    array.push(star.repeat(i + 1));

    console.log(array.join(''));

    array = [];
} 
