// Is it a palindrome?

function palindrome(string) {
    let array = string.split('');
    let array1 = [];
    let len = array.length;

    for (let i = 0; i < array.length; i += 1) {
        array1.push(array[len - (i + 1)]);
    }

    array = array.toString();
    array1 = array1.toString();

    if (array == array1) {
        return true; 
    } else {
        return false
    }
}

console.log(palindrome('arara'));
