/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length % 2 === 1){
        return false
    }
    
    const curvedBrackets = '()'
    const curlyBrackets = '{}'
    const squareBrackets = '[]'
    const replacement = ''
    
    while(s.includes(curvedBrackets, replacement) || s.includes(curlyBrackets) || s.includes(squareBrackets)){
        s = s.replace(curvedBrackets, replacement)
        s = s.replace(curlyBrackets, replacement)
        s = s.replace(squareBrackets, replacement)
    }

    if(s.length === 0){
       return true
    }
    
    return false
};