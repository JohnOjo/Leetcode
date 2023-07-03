/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const pivot = nums[0]
    if(target>=pivot){
        for(let i = 0; i < nums.length; i++){
            if(target === nums[i]){
               return i
            }
        }
    }
    else {
        for(let i = nums.length - 1; i >=0; i--){
            if(target === nums[i]){
               return i
            }
        }
    }
    
    return -1
};