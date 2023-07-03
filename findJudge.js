/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    const trustLength = trust.length
    
    if(trustLength === 0 && n === 1)
        return 1
    
    if(trustLength === 0)
        return -1
    if(n === 1)
        return -1
    
    const trustCount = []
    
    for(let i = 0; i < trustLength; i++){
        const person = trust[i][1]
        if(trustCount[person] == null){
            trustCount[person] = 0
        }
        
        trustCount[person]++
        
        if(trustCount[person] === n-1){
            let notJudge = false
            for(const trustCombination of trust){
                if(trustCombination[0] === person){
                    notJudge = true
                    break
                }
            }
            
            if(!notJudge)
                return person
        }
    }
    
    return -1
};