// Do we have odd numbers?

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let num = 0;

let cont = 0;

for (let i = 0; i < numbers.length; i += 1) {
    num = numbers[i];

    if (num % 2 == 1) {
        console.log(numbers[i]);
        cont += 1;
    }
}

if (cont == 0) {
    console.log("nenhum valor ímpar encontrado");
};