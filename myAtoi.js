/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    s = s.trim()
    
    const defaultResult = 0
    const sSize = s.length
    if(sSize === 0){
        return defaultResult
    }
    
    let finalString = ""
    const firstCharacter = s.charAt(0)
    const negativeSign = '-'
    const positiveSign = '+'
    let i = 0
    if(firstCharacter === negativeSign){
        finalString = negativeSign
        i++
    }
    else if (firstCharacter === positiveSign){
        finalString = positiveSign
        i++
    }
    
    let foundDigit = false;
    
    for(; i<sSize; i++) {
        const currentCharacter = s.charAt(i)
        
        const isDigit = !isNaN(parseInt(currentCharacter))
        if(isDigit){
            finalString += currentCharacter;
            foundDigit = true
        }
        else{
            break
        }
    }
    
    if(finalString === negativeSign || finalString === positiveSign || finalString === ""){
        return defaultResult
    }
    
    let result = parseInt(finalString)
    const lowerBound = -(2**31)
    const upperBound = (2**31-1)
    if(result < lowerBound){
       result = lowerBound
    }
    else if (result > upperBound){
        result = upperBound
    }
    
    return result
};