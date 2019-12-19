connectFour Plan (by Drew Radcliff, Lea Burkholder, Gabrielle Morrow, and Reggy Tjitradi)

*Drew and Reggy will focus on the js functions.
*Lea and Gabrielle will focus on the html & css design.

I. INITIALIZATION
*Game title and instructions & rules 
*Identify the players (player 1 is red and player 2 is black)
*Identify the current player 
*Display board 7x6 grid then red & black disks
    -use nested divs (ids and classes) : flexbox 
    -then link to data model in JS to keep track using two dimensional array (6 rows and each row has 7 cells):
    {
        [" "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "],
    }

*Display Red & Black disks 
    -using css & html
    -keep track the status of the cells (empty would be empty string " " and filled with which disk? player1red or player2black)

II. OPERATION (FUNCTIONS)
*Display the correct pattern of dropping/stacking the disks by reacting to player's input when clicking a column (follow the rules)
    -using clickHandlers for each column 
    -keeping track the position of each disk

*Create player turns following the rules
    -Assigning player 1 red and player 2 black then switch player on every turn :js


III. RESULT 
*Checking if the column(s) is/are full
    -with if condition :js
    -all columns full without connect 4(tie)

*Create winning & draw conditions
    -creating all possible winning condition (connect 4 vertically/horizontally/diagonally)
    -create alert for outcome of the game winning or tie
    -create "refresh button" to restart the game