/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const size = board.length    
    const topCorners = [0,3,6]
    
    for(let i = 0; i<size; i++){
        const rowSet = new Set()
        const rowArray = []
        const columnSet = new Set()
        const columnArray = []
        
        for(let j = 0; j<size; j++){
            let isDigit = !isNaN(parseInt(board[i][j]))
            if(isDigit){
                rowSet.add(board[i][j])
                rowArray.push(board[i][j])
            }
                        
            isDigit = !isNaN(parseInt(board[j][i]))
            if(isDigit){
                columnSet.add(board[j][i])
                columnArray.push(board[j][i])
            }
            
            const gridSet = new Set()
            const gridArray = []
            
            if(topCorners.includes(i) && topCorners.includes(j)){
                for(let a = i; a<i+3; a++){
                    for(let k = j; k<j+3; k++){
                        isDigit = !isNaN(parseInt(board[a][k]))
                        if(isDigit){
                            gridSet.add(board[a][k])
                            gridArray.push(board[a][k])
                        }
                    }
                }
                
                if(gridSet.size !== gridArray.length){
                    return false
                }
            }
        }
        
        if(rowSet.size !== rowArray.length){
            return false
        }
        
        if(columnSet.size !== columnArray.length){
            return false
        }
    }
    
    return true
};