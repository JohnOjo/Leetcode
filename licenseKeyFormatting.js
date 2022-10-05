/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
    const separator = "-"
    const characters = []
    
    for(let index = 0; index < s.length; index++) {
        const character = s[index]
        if(character !== separator){
            characters.push(character)
        }
    }
    
    const charactersSize = characters.length 
    const firstGroupSize = charactersSize % k        
    let reformattedString = ""
    let pastFistGroup = false
    characters.forEach((character, index) => {
        const indexPlus1 = index+1
        if(!pastFistGroup && firstGroupSize !== 0 && indexPlus1 % firstGroupSize === 0){        
            let appendSeparator = separator
            if(indexPlus1 === charactersSize){
                appendSeparator = ""
            }
            reformattedString = reformattedString + character + appendSeparator
            pastFistGroup = true
        }
        else{
            if(indexPlus1 % k === firstGroupSize){        
                let appendSeparator = separator
                if(indexPlus1 === charactersSize){
                    appendSeparator = ""
                }
                reformattedString = reformattedString + character + appendSeparator
            }
            else{
                reformattedString += character
            }            
        }
    })
    
    reformattedString = reformattedString.toUpperCase()
    
    return reformattedString
};