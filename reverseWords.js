/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArray = s.split(/\s/g)
    sArray.reverse()
    sArray = sArray.filter((word) => word !== '')
    
    return sArray.join(' ')
};
