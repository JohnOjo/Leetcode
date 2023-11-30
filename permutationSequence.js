/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    if(n === 1)
        return '1'

    const used = new Set();
    const path = [];
    const permutations = [];
    let count = { value: 0 }

    permuteRecursive(used, path, permutations, n, k, count)
    
    return permutations[0]
};

const permuteRecursive = function(used, path, permutations, n, k, count){
    if(count.value > k){
        return
    }
    
    if(path.length === n) {
        count.value++
        if(count.value === k){
            permutations.push(path.join(''));
            return
        }
    }
        
    for(let i = 1; i <= n; i++) {
        if(used.has(i)) continue;

        path.push(i);
        used.add(i);

        permuteRecursive(used, path, permutations, n, k, count)

        path.pop();
        used.delete(i)
    }
}
