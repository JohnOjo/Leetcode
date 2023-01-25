/**
 * @param {number[]} arr
 * @return {string}
 */
 var largestTimeFromDigits = function(arr) {    
    arr.sort((a, b) => b - a)
    
    let latestTime = ""
    let index = 0
    for(const digit of arr){
        const numberOfDigits = 4
        if(digit === 2){
            for(let i = 0; i<numberOfDigits; i++){
                if(index !== i && (arr[i] === 3 || arr[i] === 2 || arr[i] === 1 || arr[i] === 0)){
                    latestTime += (digit+""+arr[i]+":")
                    let minutes = ""
                    for(let j = 0; j<numberOfDigits; j++){
                        if(index !== j && i !== j){
                            minutes += arr[j]
                        }
                    }
                    
                    if(parseInt(minutes) < 60){
                        latestTime += minutes
                    }
                    else {
                        latestTime += minutes[1]+minutes[0]
                    }
    
                    const latestTimeSplit = latestTime.split(":")
                    if(parseInt(latestTimeSplit[0]) < 24 && parseInt(latestTimeSplit[1]) < 60)
                        return latestTime
                }
            }            
        }
        if(digit === 1 || digit === 0){
            latestTime = ""
            for(let i = 0; i<numberOfDigits; i++){
                if(index !== i){
                    latestTime += (digit+""+arr[i]+":")
                    
                    let minutes = ""
                    for(let j = 0; j<numberOfDigits; j++){
                        if(index !== j && i !== j){
                            minutes += arr[j]
                        }
                    }
                    
                    if(parseInt(minutes) < 60){
                        latestTime += minutes
                    }
                    else {
                        latestTime += minutes[1]+minutes[0]
                    }
                    const latestTimeSplit = latestTime.split(":")
                    if(parseInt(latestTimeSplit[0]) < 24 && parseInt(latestTimeSplit[1]) < 60)
                        return latestTime
                    else
                        return ""
                }
            }
        }
        
        index++
    }
    return ""
};