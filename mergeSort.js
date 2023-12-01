/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n === 0)
        return
    else if(m === 0){
        nums2.forEach((integer, index) => {
            nums1[index] = integer
        })
    }
    else {
        const mergedArray = []
        for(let i = 0, j = 0; !(i>=m && j>=n); ){
            if(nums1[i]<nums2[j] && i<m){
                mergedArray.push(nums1[i])
                i++
            }
            else if(nums1[i]>nums2[j] && j<n){
                mergedArray.push(nums2[j])
                j++
            }
            else if(i === m && j<n){
                mergedArray.push(nums2[j])
                j++
            }
            else if(j === n && i<m){
                mergedArray.push(nums1[i])
                i++
            }
            else
            {
                mergedArray.push(nums1[i], nums2[j])
                i++
                j++
            }
        }

        mergedArray.forEach((integer, index) => {
            nums1[index] = integer
        })
    }
};
