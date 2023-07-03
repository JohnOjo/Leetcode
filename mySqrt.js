/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if(x === 0)
        return 0
    if(x === 1)
        return 1
    
    let squareRoot = 1
    for(let i = 2; i<x; i++){
        const iMinusOne = i-1
        const lowerBound = iMinusOne * iMinusOne
        const upperBound = (i) * (i)
        
        if(x === upperBound)
            return i
        
        if(lowerBound<x && x<upperBound)
            return iMinusOne
    }
    
    return squareRoot
};