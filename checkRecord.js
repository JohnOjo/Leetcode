/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
    const sSize = s.length
    if(sSize === 1){
        return true
    }
    
    const late = "L"
    const absent = "A"
    
    let absentCount = 0
    for(let index = 0; index<sSize; index++){
        if(index+2<sSize && s[index] === late && s[index+1] === late && s[index+2] === late){
            return false
        }
        
        if(s[index] === absent){
            absentCount++
            if(absentCount === 2){
                return false
            }
        }
    }
    
    return true
};