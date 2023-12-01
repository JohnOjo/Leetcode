/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingNumber = 0
    for(let i = 1; i<=nums.length; i++){
        missingNumber += i - nums[i-1]
    }

    return missingNumber
};
