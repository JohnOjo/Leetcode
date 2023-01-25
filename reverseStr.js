/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    var double = 2*k;
    var stringArray = s.split('')
    var output = []
    while(stringArray.length >= double){
        var string = stringArray.splice(0, double)
        var stringToReverse = string.splice(0, k)
        var stringReversed = stringToReverse.reverse();
        string.unshift(...stringReversed)
        output.push(...string)
    }
    if(stringArray.length < double) {
        var stringToReverse = stringArray.splice(0, k)
        var stringReversed = stringToReverse.reverse();
        stringArray.unshift(...stringReversed)
        output.push(...stringArray)
    }
    var a = output.toString()
    var b = a.replace(/,/g, '')
    
    return b
};