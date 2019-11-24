const boardContainer = document.getElementById('board');
const column = 10;
const row = 10;

createBoard();
setMines(8);

function createBoard(){
   for (let i = 0; i < row; i++) { 
    addDivIntoContainer(createDomElement('row'), boardContainer); 
        for (let j = 0; j < column; j++) {
            let actualRow = document.getElementsByClassName('row')[i]; 
            const cell = createDomElement('cell');
            addPositionData(cell, i, j);
            addDivIntoContainer(cell, actualRow);
        }
    } 
}

function addDivIntoContainer(div, container){
    container.appendChild(div);
}

function createDomElement(styleClassName){
    const div = document.createElement('div');
    div.classList.add(styleClassName);
    return div;
}

function addPositionData(cell, row, column) {
    cell.setAttribute('column-data', column);
    cell.setAttribute('row-data', row);
}

function setMines(amountOfMines) {

    const arrayOfRandomNumbers = [];
    while(arrayOfRandomNumbers.length < amountOfMines){
        const randomNumber = Math.floor(Math.random() * 100);
        if(arrayOfRandomNumbers.indexOf(randomNumber) === -1) {
            arrayOfRandomNumbers.push(randomNumber); 
        }
    } 

    const allCell = document.getElementsByClassName('cell'); 
    
    for (let i = 0; i < arrayOfRandomNumbers.length; i++) {
        allCell[arrayOfRandomNumbers[i]].classList.add('mine');
    } 
    

}