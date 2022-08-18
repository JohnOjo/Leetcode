/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let permute = function(nums) {
    const permutations = []
    const numsOriginal = [...nums]
    numsOriginal.forEach((n1, i) => {
        const numsCopy = [...numsOriginal] 
        numsOriginal.forEach((n2, j) => {
            if(j-1>=0){
            numsCopy[j-1] = n2
            numsCopy[j] = n1
            permutations.push(numsCopy)
            }
            
            /*if(n1 !== n2){
                    const numsCopy = [...numsOriginal]
                    numsCopy[i] = n2
                    numsCopy[j] = n1
                const existingPermutation = permutations.find((p) => p.join() === numsCopy.join())
                if(false){
                    console.log('************************')
                    //numsCopy[i] = n1
                    //numsCopy[j] = n2   
                }
                permutations.push(numsCopy)
            }*/
        })
     })
    
    return permutations
};