let firstNumber, secondNumber, action = null
let decimalClicked = false


function clickNumber(number) {
    document.getElementById("userInput").value += number;


    if (action == null) {
        firstNumber = +document.getElementById("userInput").value
        console.log(firstNumber);
        currentNumber = firstNumber;

    } else {
        secondNumber = +document.getElementById("userInput").value;
        console.log(secondNumber);
        currentNumber = secondNumber;

    }

    console.log(action);
    console.log(typeof firstNumber);
}

function clickMethod(doIt) {
    action = doIt;

    console.log(action);
    document.getElementById("userInput").value = "";
    decimalClicked - false;

    //console.log(firstNumber);
}

function result() {
    switch (action) {
        case ('+'):
            var tempResult = firstNumber + secondNumber
            document.getElementById("userInput").value = tempResult
            firstNumber = tempResult;
            console.log(firstNumber);
            break;

        case ('-'):
            var tempResult = firstNumber - secondNumber
            document.getElementById("userInput").value = tempResult
            firstNumber = tempResult;
            console.log(firstNumber);
            break;

        case ('x'):
            var tempResult = firstNumber * secondNumber
            document.getElementById("userInput").value = tempResult
            firstNumber = tempResult;
            console.log(firstNumber);
            break;

        case ('/'):
            var tempResult = firstNumber / secondNumber
            document.getElementById("userInput").value = tempResult
            firstNumber = tempResult;
            console.log(firstNumber);
            break;

        default:
            break;
    }
}


function clean() {
    document.getElementById("userInput").value = "";
    firstNumber = null;
    secondNumber = null;
    action = null;
    currentNumber = null;
    decimalClicked = false;
}

function delite() {
    let userInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = userInput.slice(0, -1);
}

function clickSign() {
    currentNumber = -currentNumber;
    document.getElementById("userInput").value = currentNumber;
}

function clickDecimal() {
    if (!decimalClicked) {
        document.getElementById("userInput").value += ".";
        decimalClicked = true;
    }
}