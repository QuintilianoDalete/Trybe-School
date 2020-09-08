// Desafio 13
function hydrate(string) {
    let array = Array.from(string);
    let result = [];
    let number = 0;
    let final = 0;

    for (let i = 0; i < array.length; i += 1) {

        if (array[i] === '1') {
            number = Number(array[i]);
            result.push(number);
            number = 0;

        } else if (array[i] === '2') {
            number = Number(array[i]);
            result.push(number);
            number = 0;
        } else if (array[i] === '3') {
            number = Number(array[i]);
            result.push(number);
            number = 0;
        } else if (array[i] === '4') {
            number = Number(array[i]);
            result.push(number);
            number = 0;
        
        } else if (array[i] === '5') {
            number = Number(array[i]);
            result.push(number);
            number = 0;

        } else if (array[i] === '6') {
            number = Number(array[i]);
            result.push(number);
            number = 0;
            
        } else if (array[i] === '7') {
            number = Number(array[i]);
            result.push(number);
            number = 0;
            
        } else if (array[i] === '8') {
            number = Number(array[i]);
            result.push(number);
            number = 0;
            
        } else if (array[i] === '9') {
            number = Number(array[i]);
            result.push(number);
            number = 0;
        }
    }
    for ( let j = 0; j < result.length; j += 1) {
        final = final + result[j];
    }
    
    if (final === 1) {
        return `${final} copo de água`;

    } else {
        return `${final} copos de água`;
    }
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));