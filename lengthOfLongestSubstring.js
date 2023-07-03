/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const stringLength = s.length
    let longetSubstringLength = 0
    
    for(let i = 0; i<stringLength && longetSubstringLength<stringLength-i;i++){
        const substring = []
        
        for(let j = i; j<stringLength;j++){            
            if(!substring.includes(s[j])){
                substring.push(s[j])
            }
            else{
                break
            }
        }
        const substringLength = substring.length
        if(longetSubstringLength<substringLength){
           longetSubstringLength = substringLength
        }
    }
    
    return longetSubstringLength
};

// 30 min