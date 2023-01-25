/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    const counterMap = {}
    for(const num of nums){
        if(counterMap[num] == null){
            counterMap[num] = 1
        }
        else{
            return num
        }
    }
};