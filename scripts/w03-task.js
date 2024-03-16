/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return (number1 + number2);
};

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return (number1 - number2);
};

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => document.querySelector('#product').value = multiply(Number(document.querySelector('#factor1').value), Number(document.querySelector('#factor2').value));

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => document.querySelector('#quotient').value = divide(Number(document.querySelector('#dividend').value), Number(document.querySelector('#divisor').value));

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function verify () {
    if (document.querySelector('#member').checked == 1) {
        let subtotal1 = document.querySelector('#subtotal').value * 0.8;
        let formatted = `$ ${Number(subtotal1).toFixed(2)}`;
        document.querySelector('#total').textContent = formatted;
    }
    else {
        let subtotal1 = document.querySelector('#subtotal').value;
        let formatted = `$ ${Number(subtotal1).toFixed(2)}`;
        document.querySelector('#total').textContent = formatted;
    }
}

document.querySelector('#getTotal').addEventListener('click', verify);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter((number) => number%2 == 1)

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter((number) => number%2 == 0)

/* Output Sum of Org. Array */
const sum = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map((x) => x * 2);
document.querySelector('#multiplied').textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfArray = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfArray;
