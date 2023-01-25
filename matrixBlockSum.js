/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
 var matrixBlockSum = function(mat, k) {
    const answer = []
    const numberOfRows = mat.length
    const numberOfColumns = mat[0].length
    for(let i = 0; i<numberOfRows; i++){
        answer[i] = []
        for(let j = 0; j<numberOfColumns; j++){
            let sum = 0
            let startRows = i-k
            if(startRows<0)
                startRows = 0
            
            for(let m = startRows; m<=i+k && m<numberOfRows; m++){
                let startColumns = j-k
                if(startColumns<0)
                    startColumns = 0
                
                for(let l = startColumns; l<=j+k && l<numberOfColumns; l++){
                    sum += mat[m][l]
                }
            }            
            
            answer[i][j] = sum
        }
    }
        
    return answer
};

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  console.log(fruits)
  fruits.delete("apples")
  fruits.set("apples", 999)
  console.log(fruits)