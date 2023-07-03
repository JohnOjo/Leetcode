/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === ""){
        return []
    }

    const mappings = new Map([["2", ["a", "b", "c"]], ["3", ["d", "e", "f"]], ["4", ["g", "h", "i"]], ["5", ["j", "k", "l"]], ["6", ["m", "n", "o"]], ["7", ["p", "q", "r", "s"]], ["8", ["t", "u", "v"]], ["9", ["w", "x", "y", "z"]]])

    let combinations = mappings.get(digits[0])    
    let lettersLength = 0
    const digitsLength = digits.length

    for(let i = 1; i<digitsLength; i++){
        const digit = digits[i]

        const letters = mappings.get(digit)
        
        lettersLength = lettersLength * letters.length

        const combination = []
        letters.forEach((letter) => {            
            combinations.forEach((c) => {
                combination.push(c+letter)
            })
        })

        combinations = [...combination]
    }

    return combinations
};