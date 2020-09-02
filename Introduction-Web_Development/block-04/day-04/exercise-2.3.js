// Which one is the smallest value?

function smallerValue(array) {

let smallValue = 0;

    for (let i = 0; i < array.length; i += 1) {

        if (i === 0) {
            smallValue = array[0];

        } else if (array[i] < array[i - 1]) {
            smallValue = i;
        }
    }
    return smallValue;
}

console.log(smallerValue([2, 4, 6, 7, 10, 0, -3]));