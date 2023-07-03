/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let cache = {
        0: 1,
        1: 1
    }
    
    if(n === 1) return cache[n]
   
    
    for(let i = 2; i <= n; i++){
        cache[i] = cache[i-1] + cache[i-2]
        
    }
    
    return cache[n]
};