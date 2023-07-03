/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const output = [[]]
    
    for(let j = 2; j<nums.length; j++){
        const path = []
        const used = []
        subsetsRecursive(nums, j, path, used, output)
    }
    
    nums.forEach((num) => {
        output.push([num])        
    })
    nums.length !== 1 && output.push(nums)
    
    return output
};

const subsetsRecursive = function(nums, n, path, used, output){
    if(path.length === n){
        const pathCopy = [...path]
        pathCopy.sort()

        if(pathCopy.toString() === path.toString())
            output.push(pathCopy) 
        
    }
    
    for(let i = 0; i<nums.length; i++){
        if(used.includes(nums[i]))
            continue
                
        path.push(nums[i])
        used.push(nums[i])
        
        subsetsRecursive(nums, n, path, used, output)
        
        path.pop()
        used.pop()
    }
}