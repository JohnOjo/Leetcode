/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const existingValues = []
    nums.forEach((num) => {
        existingValues.push(parseInt(num, 2))
    })

    existingValues.sort((a, b) => a - b)
    
    for(let i = 0; i<nums.length; i++){
        if(existingValues[i] !== i) {
            const nonexistingValue = (i >>> 0).toString(2)
            return nonexistingValue.length === nums.length ? nonexistingValue : '0'.repeat(nums.length-nonexistingValue.length) + nonexistingValue
        }
    }

    const nonexistingValue = (nums.length >>> 0).toString(2)
    return nonexistingValue.length === nums.length ? nonexistingValue : '0'.repeat(nums.length-nonexistingValue.length) + nonexistingValue
};
