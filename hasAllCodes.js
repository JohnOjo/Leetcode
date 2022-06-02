/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
 var hasAllCodes = function(s, k) {
    // var array = []
    // var size = 0;
    // for (var i = 0; i < k; i++) {
    //     size += 2**i
    // }
    // console.log(size)
    // for (var index = 0; index <= size; index++) {
    //     var binary = index.toString(2)
    //     while(binary.length < k){
    //         binary = '0'+binary
    //     }
    //     binary.length <= k && array.push(binary)
    // }

    // var allBinaryCodes = true;
    // console.log(array)
    // array.forEach(element => {
    //     if(!s.includes(element)){
    //         allBinaryCodes = false
    //     }
    // });
    // console.log(allBinaryCodes)
    // return allBinaryCodes

    var sub = new Set();
    for(let i = 0; i <= s.length - k; i++) {
        sub.add(s.substr(i, k));
    }
    return (sub.size === Math.pow(2, k));
};

s = "00110110"
k = 2
hasAllCodes(s, k)

s = "1011110111001001101001110001100111101111010101011100111001110010010001000111010110101110000110101001011100100010100110011101011110001000100010101101011"
k = 20
hasAllCodes(s, k)