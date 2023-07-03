/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
    let weakCharacters = 0
    
    properties.sort((a, b) => b[0] - a[0] || a[1] - b[1])
    
    let max = 0
    properties.forEach((character) =>{
        const defense = character[1]
        if(max <= defense)
            max = defense
        else
            weakCharacters++
    })
    
    return weakCharacters
};