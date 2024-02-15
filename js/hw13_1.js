// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [];
let arrNumbers = [];


function showMedSumNumbers() {

    let sum = 0;
    let medSum = 1;

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number') {
            arrNumbers.push(arr[i]);

            sum += arrNumbers[i];
        }     
    }

    medSum = sum / arrNumbers.length; //среднее арифм. за пределами цикла, чтобы return увидел значение, да?

    return(medSum); // medSum возвращается в скобки функции
}

arr.push(1,1,1,22,1,'s','s','d');

console.log(showMedSumNumbers());
