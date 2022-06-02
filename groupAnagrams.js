var groupAnagrams = function(strs) {
    const groups = []
    const strsCopy = strs.map(str => {
        return str.split('').sort().join('');
    });
    
    const strsSet = new Set(strsCopy)
    
    strsSet.forEach(element => {
        groups.push(strsCopy.filter((s) => s === element))
    });
    
    strsCopy.forEach((str, index) => {
        const match = groups.find((group) => group.includes(str));

        if(match) {
            let i = groups.indexOf(match);
            
            let j = match.indexOf(str);
            groups[i][j] = strs[index]
        }
    });

    return groups
};

strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))