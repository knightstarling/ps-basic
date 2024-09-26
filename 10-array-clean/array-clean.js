const array = [3, 6, 9, 2, 16, -5, 11, 4, 20, 5];

const deleteNumber = (number) => number > 5;

const cleanArray = (array, fn) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(cleanArray(array, deleteNumber));