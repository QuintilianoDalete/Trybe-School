// Which one is the biggest value?

function biggestvalue(array) {

let bigValue = 0;

    for (let i = 0; i < array.length; i += 1) {

        if (i === 0) {
            bigValue = 0;

        } else if (array[i] > array[i - 1]) {
            bigValue = i;
        }
            
    }
return bigValue;
}

console.log(biggestvalue([2, 3, 6, 7, 10, 1]));