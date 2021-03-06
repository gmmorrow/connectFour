let boardModel = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
]
let counter
let activePlayer = "red"
const width = boardModel[0].length
const height = boardModel.length

const displayMessage = function(message) {
    var element = document.getElementById("message")
    element.textContent = message
}

const displayWinningMsg = function(player) { // DREW
    // display winning message
        // put in message div
    displayMessage(player + ' wins')
}

const displayTieMsg = function() { // DREW
    // display tie message
        // put in message div
    displayMessage('Tie game')
}

const displayActivePlayer = function() { // REGGY
    // display active player disc
    displayMessage(activePlayer + "'s turn")
}

const switchToNextPlayer = function() { // REGGY
    // switch player
    if (activePlayer === "red") {
        activePlayer = "black"
    } else if (activePlayer === "black") {
        activePlayer = "red"
    }
    displayActivePlayer();
}

const isWinner = function(player, board) { // DREW
    // check win condition

    // horizontal check
    for (let col = 0; col < width - 3; col++) {
        for (let row = 0; row < height; row++) {
            if (board[row][col] === player && board[row][col + 1] === player && board[row][col + 2] === player && board[row][col + 3] === player) {
                return true
            }
        }
    }

    // vertical check
    for (let row = 0; row < height - 3; row++) {
        for (let col = 0; col < width; col++) {
            if (board[row][col] === player && board[row + 1][col] === player && board[row + 2][col] === player && board[row + 3][col] === player) {
                return true
            }
        }
    }

    //diagonal ascending
    for (let row = 3; row < height; row++) {
        for (let col = 0; col < width - 3; col++) {
            if (board[row][col] === player && board[row - 1][col + 1] === player && board[row - 2][col + 2] === player && board[row - 3][col + 3] === player) {
                return true
            }
        }
    }

    // diagonal descending
    for (let row = 0; row < height - 3; row++) {
        for (let col = 0; col < width - 3; col++) {
            if (board[row][col] === player && board[row + 1][col + 1] === player && board[row + 2][col + 2] === player && board[row + 3][col + 3] === player) {
                return true
            }
        }
    }
    return false
}

const setUpColumnClickHandlers = function() { // REGGY
    // set up click handlers 

    let allColumns = document.querySelectorAll(".column");
    for (col = 0; col < width; col++) {
        allColumns[col].addEventListener("click", columnClickHandler);
        // set data attributes
        allColumns[col].dataset.columnIndex = col;
    }
}

const columnClickHandler = function(evt) { // REGGY
    // triggers when column is clicked
    dropDiskIntoColumn(evt.target);
}

const dropDiskIntoColumn = function(column) { // REGGY
    // drop disc in column

    let colTotalDiscs= column.childNodes.length
    let colNum = column.dataset.columnIndex

    if (colTotalDiscs < height) {
        if (activePlayer === "red") {
            let newDiv = document.createElement("div");
            newDiv.className = "disc red";
            column.appendChild(newDiv);
        } else if (activePlayer === "black") {
            let newDiv = document.createElement("div");
            newDiv.className = "disc black";
            column.appendChild(newDiv);
        }
        // add placed disc to boardModel array
        boardModel[height-colTotalDiscs-1][colNum] = activePlayer;
        // increment counter
        counter++
        // check for winner
        if (isWinner(activePlayer, boardModel)) {
            displayWinningMsg(activePlayer);
            
            let columns = document.querySelectorAll(".column")
            for (col = 0; col < width; col++) {
                columns[col].removeEventListener("click", columnClickHandler)
            }
        }
        else if (counter === (height * width)) {
            displayTieMsg()
        } else
            switchToNextPlayer()
    }
}

const resetHtmlBoard = function() {
    // clear discs in html
    let allColumns = document.querySelectorAll(".column");
    for (col = 0; col < width; col++) {
        allColumns[col].innerHTML = '';
    }
}

document.querySelector('.resetButton').onclick = function() { // LEA
    // reset html board
    resetHtmlBoard();
    // add click handlers
    setUpColumnClickHandlers();
    // reset active player
    activePlayer = "red";
    // reset html message
    displayActivePlayer();
    // reset board model
    boardModel = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ];
    counter = 0
}

const initializeGame = function() { // DREW
    // initilalize game
    // displayBoard(boardModel)
    displayActivePlayer()
    setUpColumnClickHandlers()
    counter = 0
}

initializeGame()