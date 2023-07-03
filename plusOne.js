/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    const digitsLength = digits.length
    if(digits[digitsLength-1] != 9){
         digits[digitsLength-1] += 1
    }
    else{
        let carry = 1
        for(let i = digitsLength-1; i >=0; i--){
            const sum = digits[i] + carry
            if(sum>9){
                digits[i] = parseInt(sum.toString()[1])
                carry = parseInt(sum.toString()[0])
                if(i === 0)
                    digits.unshift(carry)
            }
            else{
                digits[i] = sum
                break
            }
        }
    }
    
    return digits
};