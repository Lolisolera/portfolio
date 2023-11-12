function add(num1, num2) {
    return (num1 + num2);
}


function subtract(num1, num2) {
    return (num1 - num2);
}


function multiply(num1, num2) {
    return (num1 * num2);
}



function divide(num1, num2) {
    return (num1 / num2);
}


function calculator(num1, num2, operator) {
    return operator(num1, num2);

}


const output = document.getElementById("output");
let currentInput = "";
let currentOperator = "";
let previousInput = "";

function updateOutput() {
    output.innerText = currentInput || "0";
}

function clear() {
    currentInput = "";
    previousInput = "";
    currentOperator = "";
    updateOutput();
}

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    if (buttonValue >= "0" && buttonValue <= "9") {
        currentInput += buttonValue;
        updateOutput();
    } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
        if (currentInput) {
            previousInput = currentInput;
            currentInput = "";
            currentOperator = buttonValue;
        }
    } else if (buttonValue === "=") {
        if (currentInput && previousInput && currentOperator) {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);

            switch (currentOperator) {
                case "+":
                    currentInput = add(num1, num2);
                    break;
                case "-":
                    currentInput = subtract(num1, num2);
                    break;
                case "*":
                    currentInput = multiply(num1, num2);
                    break;
                case "/":
                    if (num2 !== 0) {
                        currentInput = divide(num1, num2);
                    } else {
                        currentInput = "Error";
                    }
                    break;
                default:
                    break;
            }

            previousInput = "";
            currentOperator = "";
            updateOutput();
        }
    } else if (buttonValue === "C") {
        clear();
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

clear();

//parseFloat is a built-in JavaScript function used to parse a string and convert it into a floating-point number 
//(a number with a decimal point). It's often used when you have numeric data in the form of a string, 
//and you want to work with it as a number, performing mathematical operations.