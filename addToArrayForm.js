/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
    let kArray = k.toString().split("")
    kArray = kArray.map((digit) => parseInt(digit))
    
    let kArrayCounter = kArray.length-1
    let carry = 0
    
    let answer = []
    let useNumIndex = false
    if(kArray.length>num.length){
        answer = kArray
    }
    else{
        useNumIndex = true
        answer = num
    }
    
    for(let i = num.length-1; i >= 0 || kArrayCounter >= 0; i--){
        let digitK = kArray[kArrayCounter]
        if(kArrayCounter < 0)
            digitK = 0
        
        let digitNum = num[i]
        if(i < 0)
            digitNum = 0
        
        const sum = digitNum + digitK + carry
        
        const index = useNumIndex?i:kArrayCounter
        if(sum<=9){
            answer[index] = sum
            carry = 0
        }
        else{
            const sumString = sum.toString()
            
            answer[index] = parseInt(sumString[1])
            carry = parseInt(sumString[0])
        }
        
            
        kArrayCounter--
    }
    if(carry > 0)
        answer.unshift(carry)
    
    return answer
};