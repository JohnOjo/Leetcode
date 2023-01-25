/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
 var kEmptySlots = function(bulbs, k) {
    const bulbsOnOrOff = []
    const bulbsLength = bulbs.length
    
    for(let i = 0; i<bulbsLength; i++){
        bulbsOnOrOff[bulbs[i]-1] = 1
        
        let consecutiveOffCount = 0
        let foundFirstOnBulb = false
        for(let j = 0; j<bulbsOnOrOff.length; j++){
            if(foundFirstOnBulb && bulbsOnOrOff[j] == null){
                consecutiveOffCount++
            }
            else{
                foundFirstOnBulb = true
                if(consecutiveOffCount === k){
                    return i+1
                }
                consecutiveOffCount = 0
            }
        }
    }
    
    
    return -1
};