import { BOX_SIZE, GRID_SIZE } from "../script/utility.js";

export function generateSudoku() {
    const sudoku = createEmptyGrid();
    //console.table(sudoku); - проверка создания таблицы 9Х9
    resolveSudoku(sudoku);
    // console.table(sudoku); - проверка что вся таблица 9Х9 заполнена неповторяющимися числами

    //очищаем несколько случайных ячеек
    return removeCells(sudoku);
}

function createEmptyGrid() {
    //new Array(GRID_SIZE) - создание нового массива размером грид-сайз (задан в утилитах)
    //fill() - заполняет каждую клеточку ungerfind
    //.map(() => new Array (GRID_SIZE).fill(null)); - бежит по массиву и заполняет ее новым массивом размера грид и присваивает значение нуль
    //создали 9Х9
    return new Array(GRID_SIZE).fill().map(() => new Array(GRID_SIZE).fill(null));
}

function resolveSudoku(grid) {
    //найдем пустую ячейку
    const emptyCell = findEmptyCell(grid);
    //если не нашли пустую ячейку
    if (!emptyCell) return true;


    //создадим массив из переменных числе от 1-9
    const numbers = getRandomNumbers();

    //console.log(numbers); проверили возвращается ли рандомальный массив числел от 1-9

    //проходимся по всему массиву
    for (let i = 0; i < numbers.length; i++) {
        //прежде, чем добавить число в ячейку проверям validate
        if (!validate(grid, emptyCell.row, emptyCell.column, numbers[i])) continue;
        //если валидация прошла успешно, то хаписываем в ячейку число из рандомального массива
        grid[emptyCell.row][emptyCell.column] = numbers[i];

        //вызываем resolveSudoku создаем рекурсию как условие для if. 
        //если resolveSudoku вернет true - мы выйдем из рекурсии
        if (resolveSudoku(grid)) return true;
        //если возвращается не true то значит мы заполнили пустую ячейку неверно. 
        grid[emptyCell.row][emptyCell.column] = null;
    }
}

export function findEmptyCell(grid) {
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let column = 0; column < GRID_SIZE; column++) {
            //если ячейка с заданной row and column пустая, то верни ее координаты в виде объекта
            if (grid[row][column] === null) return { row, column };
        }
    }
    //выйди из ф-ии если не нашел пустых ячеек
    return null;
}


function getRandomNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = numbers.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        //меняем числа внутри массива
        [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
    }
    return numbers;
}

function validate(grid, row, column, value) {
    //проверка валидации в столбце
    //валидация вернет true только в том случае если все три валидации вернули true
    return validateColumn(grid, row, column, value)
        && validateRow(grid, row, column, value)
        && validateBox(grid, row, column, value);
}

//проверяем ячейку в столбце пробегая по каждой строке в столбце кроме строки с индексом row так как туда добавляется число  && iRow !==row
//если хотя бы одно число =value, то ф-ия вернет false
function validateColumn(grid, row, column, value) {
    for (let iRow = 0; iRow < GRID_SIZE; iRow++) {
        if (grid[iRow][column] === value && iRow !== row) return false;
    }
    return true;
}

//проверяем ячейку в строке пробегая по каждому столбцу в строке кроме столбца с индексом column так как туда добавляется число  && iColumn !==column
//если хотя бы одно число =value, то ф-ия вернет false
function validateRow(grid, row, column, value) {
    for (let iColumn = 0; iColumn < GRID_SIZE; iColumn++) {
        if (grid[row][iColumn] === value && iColumn !== column) return false;
    }
    return true;
}

//проверяем все ячейки маленького квадрата
//если хотя бы одно число =value, то ф-ия вернет false
function validateBox(grid, row, column, value) {
    //нужно найти где левый верхний угол BOX_SIZE относительно пустой ячейки
    const firstRowInBox = row - row % BOX_SIZE;
    const firstColumnInBox = column - column % BOX_SIZE;

    for (let iRow = firstRowInBox; iRow < firstRowInBox + BOX_SIZE; iRow++) {
        for (let iColumn = firstColumnInBox; iColumn < firstColumnInBox + BOX_SIZE; iColumn++) {
            if (grid[iRow][iColumn] === value && iRow !== row && iColumn !== column) return false;
        }
    }
    return true;
}

function removeCells(grid) {
    //удалим количество ячеек равное DIFFICULITY
    const DIFFICULITY = 30;
    //клонируем полностью заполненную сетку grid чтобы она осталась без изменений
    const resultGrid = [...grid].map(row => [...row])

    let i = 0
    while (i < DIFFICULITY) {
        const row = Math.floor(Math.random() * GRID_SIZE)
        const column = Math.floor(Math.random() * GRID_SIZE)
        //проверяем пустая ли уже ячейка
        if (resultGrid[row][column] !== null) {
            resultGrid[row][column] = null;
            i++
        }
    }
    //console.table(resultGrid)
}
