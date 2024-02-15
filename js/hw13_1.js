// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [];
let arrNumbers = [];


function showMedSumNumbers() {

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'Number') {
            arrNumbers.push(i);
        }     

        let medSum = 0;
        medSum = (medSum + arrNumbers[i]) / arrNumbers.length;

        return(medSum);
    }
}

arr.push(1,1,1,1,1,'s','s','d');

console.log(showMedSumNumbers());
