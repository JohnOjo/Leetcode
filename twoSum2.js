/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    const numsSize = numbers.length
    
    for (let i = 0, j = numsSize-1; i<j; ){
        const sum = numbers[i] + numbers[j]
        
        if(sum === target){
            return [i+1, j+1]
        }
        if(sum > target){
            j--
        }
        if(sum < target){
            i++
        }
    }
};