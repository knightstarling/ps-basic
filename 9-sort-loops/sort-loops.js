const numbers = [1, 40, -5, 10, 0];

const sort = (array, sortType) => {
    let sortedArray = [...array]
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            switch (sortType.toLowerCase()) {
                case 'asc':
                    if (sortedArray[i] > sortedArray[j]) {
                        let temp = sortedArray[i];
                        sortedArray[i] = sortedArray[j]
                        sortedArray[j] = temp
                    };
                    break;
                case 'desc':
                    if (sortedArray[i] < sortedArray[j]) {
                        let temp = sortedArray[i];
                        sortedArray[i] = sortedArray[j]
                        sortedArray[j] = temp
                    };
                    break;
            }
        }
    }

    return sortedArray;
}

console.log(sort(numbers, 'desc'));
console.log(sort(numbers, 'asc'));

// Можно также использовать трюк обмена переменными
// if (arr[i] > arr[j]) {
//     [arr[i], arr[j]] = [arr[j], [arr[i]]
// }