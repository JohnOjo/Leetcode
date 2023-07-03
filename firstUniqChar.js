/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const sArray = s.split("")
    const sSet = new Set(sArray)
    for (const element of sSet) {
        const occurences = sArray.filter((c) => c === element)
        
        if(occurences.length === 1){
            return sArray.indexOf(element)
        }
    }
    return -1
};