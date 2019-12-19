let boardModel = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
]

const displayWinningMsg = function (player) {  // DREW
    // display winning message
    alert(player + ' wins')
    // put in message div
    var message= document.getElementById("message")
    message.textContent= player + ' wins'
}

const displayTieMsg = function () {     // DREW
    // display tie message
    alert('Tie game')
    // put in message div
    var message= document.getElementById("message")
    message.textContent= 'Tie game'
}

const displayActivePlayer = function () {   // REGGY
    // display active player disc
}

const switchToNextPlayer = function () {    // REGGY
    // switch player
}

const isWinner = function (player, board) {   // DREW
    // check win condition
    const width = board[0].length
    const height = board.length

    // horizontal check
    for (let col=0; col<width-3; col++) {
        for (let row=0; row<height; row++) {
            if (board[row][col] === player && board[row][col+1] === player && board[row][col+2] === player && board[row][col+3] === player) {
                return true
            }
        }
    }

    // vertical check
    for (let row=0; row<height-3; row++) {
        for (let col=0; col<width; col++) {
            if (board[row][col] === player && board[row+1][col] === player && board[row+2][col] === player && board[row+3][col] === player) {
                return true
            }
        }
    }

    //diagonal ascending
    for (let row=3; row<height; row++) {
        for (let col=0; col<width-3; col++) {
            if (board[row][col] === player && board[row-1][col+1] === player && board[row-2][col+2] === player && board[row-3][col+3] === player) {
                return true
            }
        }
    }

    // diagonal descending
    for (let row=0; row<height-3; row++) {
        for (let col=0; col<width-3; col++) {
            if (board[row][col] === player && board[row+1][col+1] === player && board[row+2][col+2] === player && board[row+3][col+3] === player) {
                return true
            }
        }
    }
    return false
}

const columnClickHandler = function (evt) {         // REGGY
    // triggers when column is clicked
}

const dropDiskIntoColumn = function (column) {      // REGGY
    // drop disc in column
}

const setUpColumnClickHandlers = function () {      // REGGY
    // set up click handlers
}

const initializeGame = function () {        // DREW
    // initilalize game
    // displayBoard(boardModel)
    displayActivePlayer()
    setUpColumnClickHandlers()
}

initializeGame()