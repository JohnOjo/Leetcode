/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var wiggleSort = function(nums) {
    const numsLength =  nums.length
    
    if(numsLength === 1){
        return nums
    }
    
    nums.sort((a, b) => a - b)
    
    const reorderedNums = []
    
    // smaller numbers
    for(let i = 2, j = 1; i<numsLength && j<numsLength; i+=2, j++){
        reorderedNums[i] = nums[j]
    }
    
    let numsHalfLength = Math.floor(numsLength/2)
    if(numsLength%2 === 1)
        numsHalfLength++
        
    // bigger numbers
    for(let i = 1, j = numsHalfLength; i<numsLength && j<numsLength; i+=2, j++){
        reorderedNums[i] = nums[j]
    }
    
    
    for(let i = 1; i<numsLength; i++){
        nums[i] = reorderedNums[i]
    }
        
    return reorderedNums
};