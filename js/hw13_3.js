// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

// let arr = [];

// function createArr() {
//     let arrLength = parseInt(prompt(`Write the quantityof digits for this array:`));

//     for (let i = 0; i < arrLength; i++) {
//         let digit = prompt(`Write the digit for this array:` + (i + 1));
//         arr.push(digit);
//     }
// }
// createArr();




// let newArr = arr.splice(2,4);


let arr = [];

function createArr() {
    let innerArrQuantity = parseInt(prompt(`Write the quantityof inner arrays:`));
    let a = 0;

    do {
    let arrLength = parseInt(prompt(`Write the quantityof digits for this array:`));

    for (let i = 0; i < arrLength; i++) {
        let digit = prompt(`Write the digit for this array:` + (i + 1));
        arr.push(digit);
    }
    } while (a <= innerArrQuantity);
}
createArr();
console.log(arr);