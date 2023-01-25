/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    for(let i = 0 ; i<s.length; i++){
        if(s[i] === "]"){
            let letters = ""
            for(let j = i-1; j>=0; j--){
                if(s[j] === "["){
                    let numberIndex = j
                    let number = ""
                    for(let k = j-1; k>=0; k--){
                        if(isNaN(s[k])){
                           break
                        }
                        numberIndex--
                        number = s[numberIndex] + number
                    }
                    const encoded = number + "[" + letters + "]"
                    const decoded = letters.repeat(number)
                    s = s.replace(encoded, decoded)
                    i = numberIndex
                    break
                }
                else {
                    letters = s[j] + letters
                }
            }
        }
    }
                
    return s
};

console.log(decodeString("100[leetcode]"))