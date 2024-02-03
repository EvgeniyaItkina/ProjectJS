const colors = ["red", "green", "yellow", "blue"]
const changeColor = ["lightcoral", "lightgreen", "lightyellow", "lightblue"]
const music = [new Audio("https://www.fesliyanstudios.com/play-mp3/387"),
new Audio("https://www.fesliyanstudios.com/play-mp3/387"),
new Audio("https://www.fesliyanstudios.com/play-mp3/387"),
new Audio("https://www.fesliyanstudios.com/play-mp3/387")]
let indexArrCompColor = 0
let round = 0;
let arrCompColors = [];


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


async function computerGame() {
    indexArrCompColor = 0;
    round++;
    document.getElementById("score").innerHTML = round;
    let color = Math.floor(Math.random() * 4)
    arrCompColors.push(colors[color]);

    console.log(arrCompColors);
    for (let i = 0; i <= arrCompColors.length; i++) {
        let currColor = arrCompColors[i]
        let colorIndex = colors.indexOf(currColor);
        music[colorIndex].play();
        let el = document.getElementById(currColor);
        el.style.backgroundColor = changeColor[colorIndex];

        await sleep(500);
        el.style.backgroundColor = colors[colorIndex]
        console.log(colors[colorIndex]);
    }
}

document.getElementById('red').addEventListener('click', userClick.bind(null, 0))
document.getElementById('green').addEventListener('click', userClick.bind(null, 1))
document.getElementById('yellow').addEventListener('click', userClick.bind(null, 2))
document.getElementById('blue').addEventListener('click', userClick.bind(null, 3))
async function userClick(color) {
    music[color].play();
    let currColor = colors[color]
    let el = document.getElementById(currColor);
    el.style.backgroundColor = changeColor[color];

    await sleep(500);
    el.style.backgroundColor = colors[color]
    if (colors[color] != arrCompColors[indexArrCompColor]) {
        gameOver();
        return
    }

    if (indexArrCompColor == arrCompColors.length - 1) {

        computerGame()
        return
    }

    indexArrCompColor++
}


function gameOver() {
    alert("Game Over")
    startGame()
}
document.getElementById("btnStart").addEventListener('click', startGame)
function startGame() {
    arrCompColors = [];
    round = 0;
    computerGame()
}
