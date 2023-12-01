/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let existsDuplicate = false
    if(nums.length === 1)
        return existsDuplicate

    const numsCountMap = new Map()

    for(const num of nums) {
        const count = numsCountMap.get(num)
        if(count === 1)
            return true
        else if(count == null)
            numsCountMap.set(num, 1)
        else
            numsCountMap.set(num, count+1)
    }

    return existsDuplicate
};
