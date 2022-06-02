/**
 * @param {number} n
 */
 var TicTacToe = function(n) {    
    var board = new Array(n).fill(null).map(() => new Array(n).fill(null));
    console.log(board)
    return board
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    
};

// n = 3
// var obj = new TicTacToe(n)

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
