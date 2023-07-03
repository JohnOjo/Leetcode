/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    let waysToDecode = 0

    const sLength = s.length
    
    const decodeSet = new Set()
    let decode = ""
    for(let j = 0; j<sLength; j++){
        let number = parseInt(s[j])
        if(number !== 0)
            decode += String.fromCharCode(64+number)
        else{
            if(j-1 >= 0){
                if(parseInt(s[j-1]) <= 2)
                    decode[decode.length-1] = String.fromCharCode(64+number+parseInt(s[j-1]))
                else{

                }
            }
            else {
                return 0
            }
        }
    }
    decodeSet.add(decode)

    for(let i = 0; i<sLength; i++){

        let decode = ""
        for(let j = 0; j<sLength; j++){
            let number = parseInt(s[j])
            if(0 < number && number < 27)
                decode += String.fromCharCode(64+number)
            else{
                if(j+1 < sLength)
                    number += parseInt(s[j+1])
            }

        }
    }


    return waysToDecode
};