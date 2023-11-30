/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0)
        return 0
        
    if (val > 50)
        return nums.length

    const indexesOfVal = []
    nums.forEach((num, index) => {
        if(num === val)
            indexesOfVal.push(index)
    })

    if (indexesOfVal.length === 0) {
        return nums.length
    }

    const k = nums.length - indexesOfVal.length

    for(let i = 0; i<k; i++) {
        for(let j = i === 0 ? nums.length-1 : indexesOfVal[i-1]; j >= 0; j--) {
            if (nums[j] !== nums[indexesOfVal[i]] && j > indexesOfVal[i]) {
                nums[indexesOfVal[i]] = nums[j]
                nums[j] = val
                indexesOfVal[i] = j
                if(nums.length-j === indexesOfVal.length)
                    return k

                break
            }
        }
    }
    
    return k
};
