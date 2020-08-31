// Piramid

let n = 5;

let array = [];

let star = '*';

let string = ' ';

for (let i = 0; i < n; i += 1) {

    array.push(string.repeat((n - (i + 1)) / 2));

    array.push(star.repeat(i + 1));

    array.push(string.repeat((n - (i + 1)) / 2));

    if (i % 2 == 0) {
        console.log(array.join(''));
    }
    
    array = [];

}