/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 1)
        return matrix[0]

    const spiralOrder = []
        
    if (matrix[0].length === 1) {
        matrix.forEach((matrixRow) => {
            spiralOrder.push(matrixRow[0])
        })
    }
    else {
        // spiral loop control
        for (let a = 0; a < Math.min(matrix[0].length, matrix.length); a++) {
        spiralOrder.push(matrix[a][a])
        if (spiralOrder.length === matrix[0].length * matrix.length)
            return spiralOrder
            
            // loop row indeces
            for (let countQuarter = 0; countQuarter < 4; countQuarter++) {
                if(countQuarter === 0)
                    i = a
                else if(countQuarter === 1)
                    i =  matrix[0].length-1-a
                else if(countQuarter === 2)
                    i =  matrix.length-1-a
                else
                    i = a

                const lengthToUse = countQuarter % 2 === 0 ? matrix[0].length-a : matrix.length-a
                
                // loop column indeces
                for 
                    (let j = countQuarter <  2 ? a+1 : lengthToUse-2; 
                    countQuarter <  2 ? j < lengthToUse : j >= 0+a; 
                    countQuarter <  2 ? j++ : j--) {

                    if (!(i === j && a === i)) {
                        if (countQuarter % 2 === 0) {                        
                            spiralOrder.push(matrix[i][j])
                        }
                        else {
                            spiralOrder.push(matrix[j][i])
                        }
                    }

                    if (spiralOrder.length === matrix[0].length * matrix.length)
                        return spiralOrder
                }
            }
        }
    }

    return spiralOrder
};
