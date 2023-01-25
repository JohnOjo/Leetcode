/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    const numsLength = nums.length
    if(numsLength === 1)
        return nums[0]
    
    const counterMap = {}
    for(const num of nums){
        if(counterMap[num] == null){
            counterMap[num] = 1
        }
        else{
            counterMap[num]++
            delete counterMap[num]
        }
    }
    
    const counterMapKeys = Object.keys(counterMap)
    
    return [counterMapKeys[0], counterMapKeys[1]]       
};