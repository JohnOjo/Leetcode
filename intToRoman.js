var intToRoman = function(num) {
    var output = ""
    var numString = num.toString()
    var I = "I"
    var V = "V"
    var X = "X"
    var L = "L"
    var C = "C"
    var D = "D"
    var M = "M"
    numString.split('').reverse().forEach((element, index) => {
        element = parseInt(element)
        
        switch (true) {
            case element<=3:
                switch (index) {
                    case 0:
                        output = I.repeat(element) + output
                        break;
                    case 1:
                        output = X.repeat(element) + output
                        break;
                    case 2:
                        output = C.repeat(element) + output
                        break;
                    case 3:
                        output = M.repeat(element) + output
                        break;
                    default:
                        break;
                }
                break;
            case parseInt(element)===4:
                switch (index) {
                    case 0:
                        output = I + V + output
                        break;
                    case 1:
                        output = X + L + output
                        break;
                    case 2:
                        output = C + D + output
                        break;
                    default:
                        break;
                }
                break;
            case parseInt(element)<=8:
                switch (index) {
                    case 0:
                        output = V + I.repeat(element-5) + output
                        break;
                    case 1:
                        output = L + X.repeat(element-5) + output
                        break;
                    case 2:
                        output = D + C.repeat(element-5) + output
                        break;
                    default:
                        break;
                }
                break;
            case parseInt(element)===9:
                switch (index) {
                    case 0:
                        output = I + X + output
                        break;
                    case 1:
                        output = X + C + output
                        break;
                    case 2:
                        output = C + M + output
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    });

    return output
};
var num = 58
console.log(intToRoman(num))