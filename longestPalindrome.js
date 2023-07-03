/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const sSize = s.length
    
    if(sSize === 1)
        return s
    
    let longestPalindromeString = s[0]
    
    for(let i = 0; i<sSize; i++){
        let currentString = s[i]
        
        for(let j = i-1, k = i+1; j>=0 && k<sSize; j--, k++){
            if(s[j] !== s[k]){
                break
            }
            else{
                currentString = s[j] + currentString + s[k]
                if(currentString.length > longestPalindromeString.length)
                    longestPalindromeString = currentString
            }
        }
        
        if(i+1 < sSize && s[i] === s[i+1]) {
            let currentStringEven = s[i] + s[i+1]
            if(currentStringEven.length > longestPalindromeString.length)
                longestPalindromeString = currentStringEven
            
            for(let j = i-1, k = i+2; j>=0 && k<sSize; j--, k++){
                if(s[j] !== s[k]){
                    break
                }
                else{
                    currentStringEven = s[j] + currentStringEven + s[k]
                    if(currentStringEven.length > longestPalindromeString.length)
                        longestPalindromeString = currentStringEven
                }
            }
        }
    }
    
    return longestPalindromeString
};