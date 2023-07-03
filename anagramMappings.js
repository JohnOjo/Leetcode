/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var anagramMappings = function(nums1, nums2) {
    const mapping = new Array(nums1.length)
    
    nums1.forEach((num1, index) => {
        mapping[index] = nums2.indexOf(num1)
    })
    
    return mapping
};