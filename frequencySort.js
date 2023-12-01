/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    if(s.length <= 2)
        return s

    let frequencyMap = new Map()
    for(const character of s){
        let value = frequencyMap.get(character)
        frequencyMap.set(character, 
            value ? value+1 : 1
        )
    }
    
    frequencyMap = new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]))

    let sortedCharactersByFrequency = ''
    for(const [key ,value] of frequencyMap) {
        sortedCharactersByFrequency += key.repeat(value)
    }
    return sortedCharactersByFrequency
};
