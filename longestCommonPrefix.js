/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1)
        return strs[0]

    let longetCommonPrefix = ''

    for(let i = 0; true; i++){
        let passedIndexCheck = true
        for(let j = 0; j<strs.length-1; j++){
            if(i < strs[j].length && i < strs[j+1].length){
                if(strs[j][i] !== strs[j+1][i]){
                    passedIndexCheck = false
                    break
                }
            }
            else {
                return longetCommonPrefix
            }
        }

        if(!passedIndexCheck){
            return longetCommonPrefix
        }
        else {
            longetCommonPrefix += strs[0][i]
        }
    }

    return longetCommonPrefix
};
