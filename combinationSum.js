/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const validCandidates = candidates.filter((candidate) => candidate <= target)
    let candidatesString = ""
    validCandidates.forEach((candidate) => {
        candidatesString += candidate.toString().repeat(Math.floor(target/candidate))
    })
    let expandedCandidates = candidatesString.split('')
    expandedCandidates = expandedCandidates.map((candidate) => parseInt(candidate))
    
    const usedIndexed = new Set()
    const combinations = [];
    const validCombinations = [];
     
    combinationSumRecursive(expandedCandidates, target, combinations, validCombinations, usedIndexed)
    
    return validCombinations
};

const combinationSumRecursive = function(candidates, target, combinations, validCombinations, usedIndexed) {
    let sum = 0
    if(combinations.length > 0)
        sum = combinations.reduce((acc, next) => acc + next)
    
    if(sum === target){
        combinations.sort((a, b) => a - b)
        if(!validCombinations.find((c) => c.toString() === combinations.toString()))
            validCombinations.push([...combinations])
    }
    for(let i = 0; i<candidates.length; i++){
        if(usedIndexed.has(i))
            continue
        
        combinations.push(candidates[i])
        usedIndexed.add(i)
        combinationSumRecursive(candidates, target, combinations, validCombinations, usedIndexed)
        combinations.pop()
        usedIndexed.delete(i)
    }
}