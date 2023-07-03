/**
 * @param {number[]} nums
 * @return {number}
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
            if(counterMap[num] === 3)
                delete counterMap[num]
        }
    }
    
    return Object.keys(counterMap)[0]    
};