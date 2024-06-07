const addToDisplay = (value) => {
    const display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
};

const clearDisplay = () => {
    document.getElementById('display').value = '0';
};

const calculate = () => {
    const display = document.getElementById('display').value;
    try {
        const result = evaluateExpression(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
};

const evaluateExpression = (expression) => {
    expression = expression.replace(/[^-()\d/*+.]/g, '');
    expression = expression.replace(/x/g, '*');
    return new Function('return ' + expression)();
};







