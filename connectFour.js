let boardModel = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
]

const displayWinningMsg = function () {  // DREW
    // display winning message
}

const displayTieMsg = function () {     // DREW
    // display tie message
}

const displayActivePlayer = function () {   // REGGY
    // display active player disc
}

const switchToNextPlayer = function () {    // REGGY
    // switch player
}

const determineGameWinner = function () {   // DREW
    // check win condition
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