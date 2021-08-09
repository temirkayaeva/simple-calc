'use strict';

let allButtons = document.querySelectorAll('button');
let numbers = [];
let firstnumber;
let secondNumber;
let operator;
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
        // console.log(numbers);
        if (e.target.innerHTML == '/' || e.target.innerHTML == '*' || e.target.innerHTML == '-' || e.target.innerHTML == '+') {
            operator = numbers[numbers.length - 1];
            secondNumber = +numbers[numbers.length - 2];
            console.log(secondNumber);
        } else {
            firstnumber = +numbers[numbers.length - 1];
            console.log(firstnumber);
        }
    });

}
let result = document.querySelector('.ready');

result.addEventListener('click', () => {
    let finalResult = defineOperation(operator, firstnumber, secondNumber);
    document.querySelector('.result').innerHTML = finalResult;
});

let clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    numbers = [];
    secondNumber = '';
    firstnumber = '';
    document.querySelector('.result').innerHTML = 'Вывод результата';
    document.querySelectorAll('.operation').forEach((item) => {
        item.disabled = true;
    });
    document.querySelector('.ready').disabled = true;
});


function defineOperation(operator, firstnumber, secondNumber) {
    if (operator == '*') return firstnumber * secondNumber;
    if (operator == '/') return secondNumber / firstnumber;
    if (operator == '+') return firstnumber + secondNumber;
    if (operator == '-') return secondNumber - firstnumber;
}