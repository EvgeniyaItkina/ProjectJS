const tableGame = document.querySelector('.table-game')
/* for (x = 0; x < 9; x++) {
    for (y = 0; y < 9; y++) {
        //создаем клетку
        const cell = document.createElement("input");

        //присваеваем цифровой тип клетке
        cell.setAttribute("type", "number")
        cell.setAttribute("id", x + "_" + y)
        cell.classList.add('sudoku-grid')
        tableGame.appendChild(cell)
    }
} */


for (let i_big = 0; i_big < 3; i_big++) {
    for (let j_big = 0; j_big < 3; j_big++) {
        const bigCube = document.createElement("div")
        bigCube.classList.add('bigCube')

        //add small cube
        for (let i_small = 0; i_small < 3; i_small++) {
            for (let j_small = 0; j_small < 3; j_small++) {
                const cell = document.createElement("input");
                cell.setAttribute("type", "number")
                cell.setAttribute("id", i_big + "_" + j_big + "_" + i_small + "_" + j_small)
                cell.classList.add('sudoku-grid')
                bigCube.appendChild(cell)
            }
        }
        tableGame.appendChild(bigCube)
    }

}