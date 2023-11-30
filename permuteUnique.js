/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 1)
        return [nums]

    if (Math.max(...nums) === Math.min(...nums))
        return [nums]

    const used = new Set()
    const path = []
    const permutations = new Set()

    permuteUniqueRecursive(nums, used, path, permutations)

    const uniquePermutations = []

    permutations.forEach((permutation) => {
        uniquePermutations.push(permutation.split(','))
    })

    return uniquePermutations
};

var permuteUniqueRecursive = function(nums, used, path, permutations) {
    if (path.length === nums.length) {
        permutations.add(path.join(','))
    }

    for (let i = 0; i<nums.length; i++) {
        if(used.has(i))
            continue

        used.add(i)
        path.push(nums[i])

        permuteUniqueRecursive(nums, used, path, permutations)

        used.delete(i)
        path.pop() 
    }
};
