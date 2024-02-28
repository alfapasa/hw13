//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//Вихідний рядок та символи для видалення задає користувач.

function delSymbols(arr, symbolsToDel) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== symbolsToDel) {
            result.push(a[i]);
        }
    }
    return result;
}

let a = prompt('Write the array');
let b = prompt("Write the symbols to remove");

let total = delSymbols(a, b);
console.log(total);