/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    const cardPointsSize = cardPoints.length
    if(cardPointsSize === k){
        return cardPoints.reduce((acc, next) => acc + next)
    }

    let maxSum = 0
    
    for(let i = cardPointsSize-k; ; ){
        let sum = 0
        let count = 0
        for(let j = i; count < k; j++){
            if(j === cardPointsSize){
                j = 0
            }

            sum += cardPoints[j]
            count++
        }

        if(sum > maxSum){
            maxSum = sum
        }

        if(i === 0){
            break
        }

        if(i === cardPointsSize-1){
            i = 0
        }
        else{
            i++
        }
    }

    return maxSum
};