/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 1)
        return nums[0]

    const elementsCount = new Map()
    const cutOff = nums.length/2
    
    for(const element of nums){
        const occurencesOfElement = elementsCount.get(element)

        if(occurencesOfElement)
            elementsCount.set(element, occurencesOfElement+1)
        else
            elementsCount.set(element, 1)

        if(elementsCount.get(element) > cutOff)
            return element
    }
};
