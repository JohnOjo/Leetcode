/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const noWarmerTemperature = 0
    if(temperatures.length === 1)
        return [noWarmerTemperature]

    const answer = []

    temperatures.forEach((temperature, index) => {
        if(index !== temperatures.length-1) {
            let i = index+1
            for(; i<temperatures.length; i++){
                if(temperature < temperatures[i]){
                    answer.push(i-index)
                    break
                }
            }

            if(i === temperatures.length)
                answer.push(noWarmerTemperature)
        }
    })

    answer.push(noWarmerTemperature)

    return answer
};
