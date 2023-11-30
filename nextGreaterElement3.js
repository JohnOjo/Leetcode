/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    if(n === 2**31 - 1)
        return -1

    const nums = n.toString().split('')
    
    if(nums.length === 1)
        return -1

    const used = new Set();
    const path = [];
    let permutations = [];

    nextGreaterElementRecursive(used, path, permutations, nums, n)

    return permutations.length === 0 ? -1 : Math.min(...permutations)
};

const nextGreaterElementRecursive = function(used, path, permutations, nums, n){
    if(path.length === nums.length) {
        const num = parseInt(path.join(''))
        
        if(num > n && num <= 2**31 - 1)
            permutations.push(num);
    }
        
    for(let i = 0; i < nums.length; i++) {
        if(used.has(i)) continue;

        path.push(nums[i]);
        used.add(i);

        nextGreaterElementRecursive(used, path, permutations, nums, n)

        path.pop();
        used.delete(i)
    }
}
