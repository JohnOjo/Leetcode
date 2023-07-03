/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
 var knightProbability = function(n, k, row, column) {
    let probability = 1
    if(k === 0)
        return probability
    if(k === 1 && 3>n)
        return 0
        
    let moves = 0
    const probabilities = [[], []]
    probability = knightProbabilityRecursive(n, k, row, column, probability, moves, probabilities)
    const a = probabilities[0].length/(probabilities[0].length+probabilities[1].length)
    console.log(probabilities[1].length)
    return a
};

const knightProbabilityRecursive = function(n, k, row, column, probability, moves, probabilities) {
    if(moves === k && row >= 0 && row < n && column >= 0 && column < n){
        //console.log(probability)
        probabilities[0].push([row, column])
        return
    }
    else if(moves === k)
    {
        //console.log(probability+" @@@@")
        probabilities[1].push([row, column])
        return
    }
    
    const move1 = 1
    const move2 = 2
    
    let possibilites = 0
    // up board
    if (row+move1<n && column-move2>=0)
        possibilites++
    if (row+move2<n && column-move1>=0)
        possibilites++
    if (row+move2<n && column+move1<n)
        possibilites++
    if (row+move1<n && column+move2<n)
        possibilites++

    // down board
    if (row-move1>=0 && column-move2>=0)
        possibilites++
    if (row-move2>=0 && column-move1<n)
        possibilites++
    if (row-move2>=0 && column+move1<n)
        possibilites++
    if (row-move1>=0 && column+move2<n)
        possibilites++
    
    if (possibilites === 0)
        return probability
    
    probability *= (1/8)
    
    // up board
    //if (row+move1<n && column-move2>=0)
        knightProbabilityRecursive(n, k, row+move1, column-move2, probability, moves+1, probabilities)
    //if (row+move2<n && column-move1>=0)
        knightProbabilityRecursive(n, k, row+move2, column-move1, probability, moves+1, probabilities)
    //if (row+move2<n && column+move1<n)
        knightProbabilityRecursive(n, k, row+move2, column+move1, probability, moves+1, probabilities)
    //if (row+move1<n && column+move2<n)
        knightProbabilityRecursive(n, k, row+move1, column+move2, probability, moves+1, probabilities)

    // down board
    //if (row-move1>=0 && column-move2>=0)
        knightProbabilityRecursive(n, k, row-move1, column-move2, probability, moves+1, probabilities)
    //if (row-move2>=0 && column-move1<n)
        knightProbabilityRecursive(n, k, row-move2, column-move1, probability, moves+1, probabilities)
    //if (row-move2>=0 && column+move1<n)
        knightProbabilityRecursive(n, k, row-move2, column+move1, probability, moves+1, probabilities)
    //if (row-move1>=0 && column+move2<n)
        knightProbabilityRecursive(n, k, row-move1, column+move2, probability, moves+1, probabilities)
}