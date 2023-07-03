/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const redNumbers = []
    const whiteNumbers = []
    const blueNumbers = []
    const numsSize = nums.length
    
    nums.forEach((num, index) => {
        switch(num){
            case 0:{
                redNumbers.push(num)
                break
            }
            case 1:{
                whiteNumbers.push(num)
                break
            }
            case 2:{
                blueNumbers.push(num)
                break
            } 
            default:{
                break
            }
        }
    })
    
    const output = [...redNumbers, ...whiteNumbers, ...blueNumbers]
    output.forEach((number, index) => {
        nums[index] = number
    })
};