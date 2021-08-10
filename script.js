'use strict';

let allButtons = document.querySelectorAll('button');
let numbers = [];
let firstNumber;
let secondNumber;
let operator;
let IndexOperator;
document.querySelectorAll('.operation').forEach((item) => {
    item.disabled = true;
});
document.querySelector('.ready').disabled = true;
for (let button of allButtons) {
    button.addEventListener('click', function (e) {
        numbers.push(e.target.innerHTML);
        if (numbers.length) {
            document.querySelectorAll('.operation').forEach((item) => {
                item.disabled = false;
            });
            document.querySelector('.ready').disabled = false;
        }

        if (e.target.innerHTML == '/' || e.target.innerHTML == '*' || e.target.innerHTML == '-' || e.target.innerHTML == '+') {
            operator = numbers[numbers.length-1];
            IndexOperator = numbers.length - 1;
            numbers.splice(numbers.length - 1, 1);
            console.log(numbers);
            firstNumber = +numbers.join('');
            // secondNumber = +numbers[numbers.length - 2];
            console.log(firstNumber);
        }
        console.log(numbers);
    });

}
let result = document.querySelector('.ready');

result.addEventListener('click', () => {
    let spliceNumbers = numbers.splice(IndexOperator, numbers.length - 1);
    secondNumber = +spliceNumbers.join('');
    console.log(secondNumber);
    console.log(firstNumber+secondNumber);
    let finalResult = defineOperation(operator, firstNumber, secondNumber);
    document.querySelector('.result').innerHTML = finalResult;
});

function defineOperation(operator, firstNumber, secondNumber) {
    if (operator == '*') return firstNumber * secondNumber;
    if (operator == '/') return secondNumber / firstNumber;
    if (operator == '+') return firstNumber + secondNumber;
    if (operator == '-') return secondNumber - firstNumber;
}

let clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    numbers = [];
    secondNumber = '';
    firstNumber = '';
    document.querySelector('.result').innerHTML = 'Вывод результата';
    document.querySelectorAll('.operation').forEach((item) => {
        item.disabled = true;
    });
    document.querySelector('.ready').disabled = true;
});