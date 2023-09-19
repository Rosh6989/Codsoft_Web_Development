document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    
    let currentInput = "";
    let currentOperator = "";
    let result = null;
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            
            if (!isNaN(buttonText) || buttonText === ".") {
                currentInput += buttonText;
                display.value = currentInput;
            } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
                if (currentOperator !== "") {
                    calculate();
                }
                currentOperator = buttonText;
                result = currentInput;
                currentInput = "";
            } else if (buttonText === "=") {
                if (currentOperator !== "") {
                    calculate();
                    currentOperator = "";
                }
            } else if (buttonText === "C") {
                currentInput = "";
                currentOperator = "";
                result = null;
                display.value = "";
            }
        });
    });
    
    function calculate() {
        switch (currentOperator) {
            case "+":
                result = parseFloat(result) + parseFloat(currentInput);
                break;
            case "-":
                result = parseFloat(result) - parseFloat(currentInput);
                break;
            case "*":
                result = parseFloat(result) * parseFloat(currentInput);
                break;
            case "/":
                if (parseFloat(currentInput) === 0) {
                    alert("Division by zero is not allowed!");
                    resetCalculator();
                    return;
                }
                result = parseFloat(result) / parseFloat(currentInput);
                break;
            default:
                break;
        }
        display.value = result;
        currentInput = "";
    }
    
    function resetCalculator() {
        currentInput = "";
        currentOperator = "";
        result = null;
        display.value = "";
    }
});
