/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const matrixLength = matrix.length
    let matrixPortionLength = matrix.length
    for(let i = 0; i<matrixLength/2; i++){
        rotatePortion(matrix, matrixPortionLength, i)
        matrixPortionLength--
    }
};

const rotatePortion = function(matrix, matrixLength, startIndex) {
    const right = []
    const left = []
    const top = matrix[startIndex].slice(startIndex, matrixLength)
    const bottom = matrix[matrixLength-1].slice(startIndex, matrixLength)
    
    for(let i = startIndex; i<matrixLength; i++){
        right.push(matrix[i][matrixLength-1])
        left.push(matrix[i][startIndex])
    }
    
    right.reverse()
    left.reverse()
    
    for(let i = startIndex, j = 0; i<matrixLength; i++,j++){
        matrix[matrixLength-1][i] = right[j]
        matrix[startIndex][i] = left[j]
    }
    
    for(let i = startIndex, j = 0; i<matrixLength; i++,j++){
        matrix[i][matrixLength-1] = top[j]
        matrix[i][startIndex] = bottom[j]
    }
};