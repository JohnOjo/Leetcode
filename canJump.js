/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reachLastIndex = true

    if(nums.length === 1)
        return reachLastIndex

    if(nums[0] === 0)
        return !reachLastIndex

    if (Math.min(...nums) === 1)
        return reachLastIndex
    
    for(let i = nums.indexOf(0, 0); i<nums.length && i >= 0; ) {
        let jumpGap = 1
        let j = i-1
        while(i+1<nums.length && nums[i+1] === 0) {
            jumpGap++
            i++
        }

        for(; j >= 0; j--) {
            if(nums[j] > nums[i] + jumpGap - (i === nums.length-1 ? 1 : 0))
                break

            jumpGap++
        }

        if(j === -1)
            return !reachLastIndex

        i = nums.indexOf(0, i+1)
    }

    return reachLastIndex
};
