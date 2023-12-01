/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordLength = 0
    
    for(let i = s.length-1; i>=0; i--){
        if(s[i].toLowerCase().match(/[a-z]/i)){
            lastWordLength++
        }
        else {
            if(lastWordLength > 0)
                break
        }
    }

    return lastWordLength
};
