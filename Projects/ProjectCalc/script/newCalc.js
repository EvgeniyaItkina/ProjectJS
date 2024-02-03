const userInput = document.getElementById("userInput");
let firstNumber, secondNumber, action, checkNumber, resultComputed = false;
function clickNumber(inputNewElement) {
    if (resultComputed) {
        resultComputed = false;
        userInput.value = "";
    }
    userInput.value += inputNewElement;

    if (Number(userInput.value) == userInput.value) {
        checkNumber = userInput.value
    } else {
        userInput.value = checkNumber
    }

}

function clickMethod(sign) {
    console.log(`firstNumber ${firstNumber}`);
    console.log(`userInput ${userInput.value}`);
    console.log(`action ${action}`);
    console.log(`sign ${sign}`);

    if (action) {
        result()

    } else {
        firstNumber = userInput.value;
    }
    action = sign;
    userInput.value = "";
    console.log(`firstNumber ${firstNumber}`);
}

function clickSign() {
    let num1 = Number(userInput.value)
    userInput.value = num1 * (-1)
}

function clean() {
    userInput.value = "";
    firstNumber = ""
    secondNumber = ""
    action = null;
}

function deleteLast() {
    userInput.value = userInput.value.slice(0, -1);
}
function result() {
    let tempResult;
    let num1 = Number(firstNumber);
    let num2 = Number(userInput.value);
    switch (action) {
        case ('+'):
            tempResult = num1 + num2
            break;

        case ('-'):
            tempResult = num1 - num2
            break;

        case ('x'):
            tempResult = num1 * num2
            break;

        case ('/'):
            tempResult = num1 / num2
            break;

        default:
            tempResult = num1;
            break;
    }
    userInput.value = tempResult
    firstNumber = tempResult;
    action = ""
    resultComputed = true;
}