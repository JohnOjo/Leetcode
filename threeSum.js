/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const triplets = []
    const currentTriplet = []
    const usedIndecies = new Set()
    threeSumRecursive(nums, triplets, currentTriplet, usedIndecies)
    
    return triplets
};

const threeSumRecursive = function(nums, triplets, currentTriplet, usedIndecies) {
    let sum = 1
    
    if(currentTriplet.length === 3){
        sum = currentTriplet.reduce((acc, next) => acc + next)
    }
    if(sum === 0){
        currentTriplet.sort((a, b) => a - b)
        if(!triplets.find((t) => t.toString() === currentTriplet.toString())){
            triplets.push([...currentTriplet])
        }
    }
    
    for(let i = 0; i<nums.length; i++){
        if(usedIndecies.has(i))
            continue
        
        currentTriplet.push(nums[i])
        usedIndecies.add(i)
        
        threeSumRecursive(nums, triplets, currentTriplet, usedIndecies)
        
        currentTriplet.pop()
        usedIndecies.delete(i)
    }
};