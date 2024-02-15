// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = parseFloat(prompt('Write first digit:'));
let znak = prompt('Write math symbol:');
let y = parseFloat(prompt('Write second digit:'));
let result;

function doMath(x, znak, y) {
    switch (znak) {
        case "+":
            result = x + y;
        break;
        case "-":
            result = x - y;
        break;
        case "*":
            result = x * y;
        break;
        case "/":
            result = x / y;
        break;
        case "^":
            result = x **
             y;
        break;
        default:
            console.log('The digit or symbol is not correct');
    }

    console.log("Result: ",result);

    return(result);
}

doMath(x, znak, y);