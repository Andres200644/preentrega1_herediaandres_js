let display = document.getElementById('display');
let currentInput = '';
let currentOperator = null;
let currentFunction = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentOperator = operator;
    currentInput += operator;
    display.value = currentInput;
}

function appendFunction(func) {
    currentFunction = func;
    currentInput = func + '(' + currentInput + ')';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch {
        display.value = 'Error';
    }
}