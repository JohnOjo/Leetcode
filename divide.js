/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    let isNegative = false
    if((dividend < 0 && 0 < divisor) || (divisor < 0 && 0 < dividend)){
        isNegative = true
    }
    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    
    let subtractCount = 0
    if(divisor === dividend){
        subtractCount++
    }
    else if(dividend >= divisor){
        let ret = 0
        while (divisor <= dividend) {
            let value = divisor
            let multiple = 1
            while (value + value <= dividend) {
                value += value
                multiple += multiple
            }
            dividend = dividend - value
            ret += multiple
        }
        subtractCount = ret
    }
    if(isNegative)
        subtractCount = parseInt("-"+subtractCount)
    
    if((2**31) - 1 < subtractCount)
        return (2**31) - 1
    
    if(-(2**31) > subtractCount)
        return -(2**31)  
    
    return subtractCount
};