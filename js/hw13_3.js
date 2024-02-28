// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.


function userArr() {
    let innerArrQuantity = parseInt(prompt(`Write the quantityof inner arrays:`));
    let arr = [];

    for (let i = 0; i < innerArrQuantity; i++) {
        let innerArr = [];
        let quantityOfSymbols = parseInt(prompt(`Write the quantity of symbols for the ${i} array`));
        for (let a = 0; a < quantityOfSymbols; a++) {
            let value = parseInt(prompt(`Write the ${a} number for the ${i} array`));
            innerArr.push(value);
        }
    arr.push(innerArr);
    }
    return arr;
}

let result = userArr();
console.log(result);