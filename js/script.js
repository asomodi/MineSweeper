const boardContainer = document.getElementById('board');
const columns = 10;
const rows = 10;
const board = [];

function cell(row, column){
    return "<div class='empty cell' row-data="+ row +"  column-data="+ column +"></div>";
}

function mine(row, column){
    return "<div class='mine cell' row-data="+ row +"  column-data="+ column +"></div>";
}

createBoard();
setMines(5);
insertBoard();

function createBoard(){
    for (let i = 0; i < rows; i++) { 
        board[i]=[cell];
        for (let j = 0; j < columns; j++)    { 
            board[i][j] = cell(i,j);
        } 
    }
}

function insertBoard(){
    clearBoard();
    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < columns; j++)    { 
            boardContainer.insertAdjacentHTML("beforeend", board[i][j]);
        } 
    }
}

function countMines(){
    let count = 0;
    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < columns; j++)    { 
            if (board[i][j] === mine(i,j)){
                count++;
            };
        } 
    }
    return count;
}

function clearBoard() {
    boardContainer.innerHTML = "";
}

function generateRandomNumber(){
    return Math.floor(Math.random() * (rows-1));
}

function setMines(amountOfMines) {
    let minesNow = 0;

    while (minesNow < amountOfMines) {
        x = generateRandomNumber();
        y= generateRandomNumber();
        board[x][y] = mine(x,y);
        minesNow = countMines();
    }
}

function searchForMines(row, column){

    if (board[row][column] === mine(row, column)){
        console.log("DIE");
        return "die";
    }

    let countMines = 0;

        for (let a = -1; a <= 1; a++) {
            for (let b = -1; b <= 1; b++) {
                if (typeof board[row + a] !== 'undefined' 
                    && typeof board[row + b] !== 'undefined' 
                    && typeof board[row + a][column + b] !== 'undefined') {
                    if (board[row + a][column + b] === mine(row + a, row + b)) {
                        if (!(a === 0 && b === 0)) {
                            countMines++;
                        }
                    }
                }
            }
        }

    return countMines;
}
