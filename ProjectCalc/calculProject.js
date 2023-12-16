let firstNumber, secondNumber, action
    = null;


function clickNumber(number) {
    document.getElementById("userInput").value += number;


    if (action == null) {
        firstNumber = +document.getElementById("userInput").value
        console.log(firstNumber);

    } else {
        secondNumber = +document.getElementById("userInput").value;
        console.log(secondNumber);

    }

    console.log(action);
    console.log(typeof firstNumber);
}

function clickMethod(doIt) {
    action = doIt;
    // firstNumber = document.getElementById("userInput").value;

    console.log(action);
    document.getElementById("userInput").value = "";

    //console.log(firstNumber);
}

function result() {
    switch (action) {
        case ('+'):
            document.getElementById("userInput").value = firstNumber + secondNumber
            break;

        case ('-'):
            document.getElementById("userInput").value = firstNumber - secondNumber
            break;

        case ('x'):
            document.getElementById("userInput").value = firstNumber * secondNumber
            break;

        case ('/'):
            document.getElementById("userInput").value = firstNumber / secondNumber
            break;

        default:
            break;
    }

}