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

