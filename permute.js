/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const used = new Set();
    const path = [];
    const permutations = [];
    permuteRecursive(used, path, permutations, nums)
    return permutations
};

const permuteRecursive = function(used, path, permutations, nums){
    if(path.length === nums.length) {
        permutations.push([...path]);
    }
        
    for(let i = 0; i < nums.length; i++) {
        if(used.has(nums[i])) continue;

        path.push(nums[i]);
        used.add(nums[i]);

        permuteRecursive(used, path, permutations, nums)

        path.pop();
        used.delete(nums[i])
    }
}