// Empty pyramid

let n = 111;
let array = [];
let star = '*';
let string = ' ';
let cont = 0;

if (n % 2 == 0) {
    console.log('Escolha um valor de n que seja impar!')

} else {

    for (let i = 0; i <= (n / 2); i += 1) {

        if (i == 0) {
            array.push(string.repeat((n - (i + 1)) / 2));
            array.push(star);
            array.push(string.repeat((n - (i + 1)) / 2));
            console.log(array.join(''));
            array = [];
            cont = 1;

        } else if ((i + 1) % 2 == 0) {
            array.push(string.repeat(((n - 1) / 2) - cont));
            array.push(star);
            array.push(string.repeat(i));
            array.push(star);
            array.push(string.repeat(((n - 1) / 2) - cont));

            console.log(array.join(''));
            array = [];
            cont += 1;

        }
    }
    array.push(star.repeat(n));
    console.log(array.join(''));
    array = [];
}
