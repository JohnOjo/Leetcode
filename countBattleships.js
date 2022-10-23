/**
 * @param {character[][]} board
 * @return {number}
 */
 var countBattleships = function(board) {
    let numberOfBattleships = 0
    const rowLength = board[0].length
    const columnLength = board.length
    const battleship = "X"
    for(let i = 0; i<columnLength; i++){
        for(let j = 0; j<rowLength; j++){
            if(battleship === board[i][j]){
                numberOfBattleships++
                countBattleshipsRecursive(board, i, j)
            }
        }
    }

    return numberOfBattleships
};

const countBattleshipsRecursive = function(board, i, j) {
    board[i][j] = "."
    const rowLength = board[0].length
    const columnLength = board.length
    const battleship = "X"
    let enteredCondition = false

    if(columnLength > i+1 && battleship === board[i+1][j]){
        enteredCondition = true
        return countBattleshipsRecursive(board, i+1, j)
    }
    if(0 <= i-1 && battleship === board[i-1][j]){
        enteredCondition = true
        countBattleshipsRecursive(board, i-1, j)
    }
    if(rowLength > j+1 && battleship === board[i][j+1]){
        enteredCondition = true
        countBattleshipsRecursive(board, i, j+1)
    }
    if(0 <= j-1 && battleship === board[i][j-1]){
        enteredCondition = true
        countBattleshipsRecursive(board, i, j-1)
    }

    if(!enteredCondition){
        return
    }
}