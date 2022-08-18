/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var twoSumLessThanK = function(nums, k) {
    const validNumbers = nums.filter((num) => num-1 < k)
    const noValidSum = -1
    
    if(validNumbers.length === 0){
        return noValidSum
    }
    const sumsArray = []
    for (let i = 0; i<validNumbers.length; i++) {
        const pivotNumber = validNumbers[i]
        for (let j = i+1; j<validNumbers.length; j++) {
            const sum = pivotNumber + validNumbers[j]
            if(sum < k){
                sumsArray.push(sum)  
            }
        }
    }
    
    if(sumsArray.length === 0){
        return noValidSum
    }
    
    const maximunSum = Math.max(...sumsArray)
    
    return maximunSum
};