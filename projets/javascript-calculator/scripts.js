// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstValue = '';

    const updateDisplay = () => {
        display.textContent = currentInput || '0';
    };

    const calculate = () => {
        try {
            // Use Function constructor for safer evaluation
            currentInput = String(new Function('return ' + currentInput)());
        } catch {
            currentInput = 'Error';
        }
    };

    document.querySelector('.buttons').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            const value = e.target.textContent;

            if (value === 'AC') {
                currentInput = '';
                operator = '';
                firstValue = '';
            } else if (value === '±') {
                currentInput = currentInput.startsWith('-')
                    ? currentInput.slice(1)
                    : '-' + currentInput;
            } else if (value === '%') {
                currentInput = String(parseFloat(currentInput) / 100);
            } else if (value === '=') {
                calculate();
            } else if (['/', '*', '-', '+'].includes(value)) {
                if (currentInput) {
                    currentInput += value;
                }
            } else {
                currentInput += value;
            }

            updateDisplay();
        }
    });

    updateDisplay();
});
