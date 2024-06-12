let currentExpression = '';

function appendNumber(num) {
    currentExpression += num;
    document.getElementById('display').value = currentExpression;
}

function appendOperator(operator) {
    if (currentExpression !== '' && !isNaN(currentExpression[currentExpression.length - 1])) {
        currentExpression += operator;
        document.getElementById('display').value = currentExpression;
    }
}
function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function calculate() {
    
    try {
        const result = eval(currentExpression);
        document.getElementById('display').value = result;
        currentExpression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
