/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanNumeralsMap = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100],  ["D", 500], ["M", 1000]])
	const sLength = s.length
 
    if(sLength === 1)
        return romanNumeralsMap.get(s[0])
    
    let integer = 0
    let i = 0
	for(; i<sLength-1; i++){
        const current = romanNumeralsMap.get(s[i])
        const next = romanNumeralsMap.get(s[i+1])
        if(current >= next ){
            integer += current
        }
        else {
            integer += next - current
            i++
        }
	}
 
    if(i === sLength - 1){
        const next = romanNumeralsMap.get(s[sLength - 1])
        integer += next
    }
 
	return integer 
};