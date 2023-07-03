/**
 * @param {string} num
 * @return {boolean}
 */
 var isStrobogrammatic = function(num) {
    const inValidDigitDictionary = new Set(["2","3","4","5","7"])
    const numString = num.toString()
    let rotated = ""
    for(let i = numString.length-1; i>=0; i--){
        let digit = numString[i]
        if(inValidDigitDictionary.has(digit)){
            return false
        }
        
        switch(digit){
            case "6": {
                digit = "9"
                break
            }
            case "9": {
                digit = "6"               
                break
            }
            default: {                
                break
            }
        }
        rotated += digit
    }
    
    if(rotated === numString)
        return true
    
    return false
};

var isStrobogrammatic = function(num) {
    const inValidDigitDictionary = new Set(["1","2","3","4","5","7"])
    const numString = num.toString()
    
    for(let i = numString.length-1, j = 0; j<=i; i--, j++){
        let digitFromEnd = numString[i]
        let digitFromStart = numString[j]
        if(inValidDigitDictionary.has(digitFromEnd) || inValidDigitDictionary.has(digitFromStart)){
            return false
        }
        
        if(digitFromEnd === "6"){
            digitFromEnd = "9"
        }
        
        if(digitFromStart === "6"){
            digitFromStart = "9"
        }
        
        if(digitFromStart !== digitFromEnd){
            return false
        }
    }
    
    return true
};