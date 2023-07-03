/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b)
    let smallestMissingPositive = 1
    for(const num of nums){
        if(num > 0) {
            if(num === smallestMissingPositive)
                smallestMissingPositive++
            else if(num > smallestMissingPositive)
                break
        }
    }

    return smallestMissingPositive
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const maximum = Math.max(...nums)
    let minimum = maximum
    for(const num of nums){
        if(num > 0) {
            if(num <= minimum)
                minimum = num
        }
    }

    if(minimum > 1)
        return minimum-1

    let smallestMissingPositive = 1
    for(const num of nums){
        if(minimum <= num && num <= maximum) {
            if(num <= minimum)
                minimum = num
        }
    }

    return smallestMissingPositive
};