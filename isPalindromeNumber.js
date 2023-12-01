/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)
        return false
    else if(x<10)
        return true

    const xString = x.toString()
    for(let i = 0; i<=Math.ceil(xString.length/2)-1; i++){
        if(xString[i] !== xString[xString.length-1-i])
            return false
    }

    return true
};
