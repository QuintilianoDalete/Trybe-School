// Let`s construct a square 

let n = 5;

let array = [];

for (let i = 0; i < n; i += 1) {
    array.push('*');
}

for (let j = 0; j < n; j += 1) {
    console.log(array.join(''));
}

