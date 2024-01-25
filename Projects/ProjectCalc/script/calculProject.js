let firstNumber, secondNumber, action = null
let decimalClicked = false


function clickNumber(number) {
    document.getElementById("userInput").value += number;


    if (action == null) {
        firstNumber = +document.getElementById("userInput").value
        //console.log(firstNumber);
        // currentNumber = firstNumber;

    } else {
        secondNumber = +document.getElementById("userInput").value;
        // console.log(secondNumber);
        // currentNumber = secondNumber;

    }

    //console.log(action);
    //console.log(typeof firstNumber);
}

function clickMethod(doIt) {
    action = doIt;

    //console.log(action);
    document.getElementById("userInput").value = "";
    decimalClicked = false;

    //console.log(firstNumber);
}

function result() {
    let tempResult;

    switch (action) {
        case ('+'):
            tempResult = firstNumber + secondNumber
            break;

        case ('-'):
            tempResult = firstNumber - secondNumber
            break;

        case ('x'):
            tempResult = firstNumber * secondNumber
            break;

        case ('/'):
            tempResult = firstNumber / secondNumber
            break;

        default:
            tempResult = firstNumber;
            break;
    }
    document.getElementById("userInput").value = tempResult
    firstNumber = tempResult;
}


function clean() {
    document.getElementById("userInput").value = "";
    firstNumber = secondNumber = action = null;
    decimalClicked = false;
}

function deleteLast() {
    let userInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = userInput.slice(0, -1);
}

function clickSign() {
    let currentNumber = Number(document.getElementById("userInput").value);
    currentNumber = -currentNumber;
    firstNumber = currentNumber
    /*     console.log(`currentNumber ${currentNumber}`);
        console.log(`firstNumber ${firstNumber}`); */
    document.getElementById("userInput").value = currentNumber;
}

function clickDecimal() {
    if (!decimalClicked) {
        let currentValue = document.getElementById("userInput").value;
        // Добавляем "0.", если текущее значение пустое
        if (currentValue === "") {
            currentValue = "0";
        }
        document.getElementById("userInput").value = currentValue + ".";
        decimalClicked = true;
    }
}

