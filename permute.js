/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let permute = function(nums) {
    const permutations = []
    const numsOriginal = [...nums]
    numsOriginal.forEach((n1, i) => {
        const numsCopy = [...numsOriginal] 
        numsOriginal.forEach((n2, j) => {
            if(j-1>=0){
            numsCopy[j-1] = n2
            numsCopy[j] = n1
            permutations.push(numsCopy)
            }
            
            /*if(n1 !== n2){
                    const numsCopy = [...numsOriginal]
                    numsCopy[i] = n2
                    numsCopy[j] = n1
                const existingPermutation = permutations.find((p) => p.join() === numsCopy.join())
                if(false){
                    console.log('************************')
                    //numsCopy[i] = n1
                    //numsCopy[j] = n2   
                }
                permutations.push(numsCopy)
            }*/
        })
     })
    
    return permutations
};

let permute = function(nums) {
    const numsSize = nums.length
    
    if(numsSize === 1){
        return [nums]
    }
    
    let numberOfPermutations = 1
    for(let index = 2; index<=numsSize; index++){
        numberOfPermutations = numberOfPermutations * index
    }
    
    const permutationSet = new Array(numsSize).fill(null)
    const permutations = []
    for(let index = 0; index<numberOfPermutations; index++){
        permutations.push([...permutationSet])
    }
    
    for(let index = 0; index<numsSize; index++){
        const number = nums[index]
        let startingPosition = index
        permutations.forEach((permutation) => {
            console.log(startingPosition)
            permutation[startingPosition] = number
            if(startingPosition === numsSize-1){
                startingPosition = 0
            }
            else {
                startingPosition++
            }
        })
        console.log(' ************************ ')
    }
    
    return permutations
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let permute = function(nums) {
    const numsSize = nums.length
    
    if(numsSize === 1){
        return [nums]
    }
    
    let numberOfPermutations = 1
    for(let index = 2; index<=numsSize; index++){
        numberOfPermutations = numberOfPermutations * index
    }
    
    const permutationSet = new Array(numsSize).fill(null)
    const permutations = []
    for(let index = 0; index<numberOfPermutations; index++){
        permutations.push([...permutationSet])
    }
    
    for(let index = 0; index<numsSize; index++){
        const number = nums[index]
        let startingPosition = index
        
        permutations.forEach((permutation, index) => {
            permutation[startingPosition] = number
            if(startingPosition === numsSize-1){
                startingPosition = 0
            }
            else {
                startingPosition++
            }
        })
    }
    
    for(let index = numsSize-1; index<permutations.length-1; index++){
        permutations[index].reverse()
    }
    return permutations
};