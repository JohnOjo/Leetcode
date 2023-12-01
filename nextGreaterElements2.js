/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    if(nums.length === 1)
        return [-1]

    const nextGreaterNumbers = []
    const max = Math.max(...nums)

    nums.forEach((num, index) => {
        if(num !== max) {
            let i = index === nums.length-1 ? 0 : index+1

            for(; i !== index; ) {
                if(num < nums[i]) {
                    nextGreaterNumbers.push(nums[i])
                    break
                }

                i = i === nums.length-1 ? 0 : i+1
            }  
        }
        else {
            nextGreaterNumbers.push(-1)
        }
    })

    return nextGreaterNumbers
};
