/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const numsSize = nums.length
    nums = nums.map((num, index) => {
         return {
            originalIndex: index,
            number: num
        }
    })
    
    nums.sort((a, b) => a.number - b.number)
    for (let i = 0, j = numsSize-1; i<j; ){
        const lowerBound = nums[i].number
        const upperBound = nums[j].number
        
        if(lowerBound + upperBound === target){
            return [nums[i].originalIndex, nums[j].originalIndex]
        }
        if(lowerBound + upperBound > target){
            j--
        }
        if(lowerBound + upperBound < target){
            i++
        }
    }
};