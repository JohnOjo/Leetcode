/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
 var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
    const targetSecondsString = targetSeconds.toString()    
    const options = new Set()
    
    if(targetSecondsString.length === 1){
        const option = "0" + targetSecondsString
        options.add(option)
    }
    if(targetSecondsString.length === 2 || targetSecondsString.length === 1){
        options.add(targetSecondsString)
    }
    
    const maxDigits = 4
    const secondsInMinute = 60
    const secondsPortion = (targetSeconds%secondsInMinute)
    const minutesPortion = Math.floor(targetSeconds/secondsInMinute)
    
    let secondsPortionString = secondsPortion.toString()
    if(secondsPortionString.length < 2)
       secondsPortionString = "0" + secondsPortionString
    const validTime = minutesPortion.toString() + "" + secondsPortionString
    
    if(validTime.length <= maxDigits)
        options.add(validTime)
    
    // normalisation case
    if(validTime.length < maxDigits){
        const option = "0" + validTime
        options.add(option)
    }
    
    if(minutesPortion != 0 && secondsPortion < 40){
        const option = (minutesPortion-1) + "" + (secondsPortion+secondsInMinute)
        if(option.length <= maxDigits)
            options.add(option)
        
        // normalisation case
        if(option.length < maxDigits){
            const optionNormalised = "0" + option
            options.add(optionNormalised)
        }
    }
    
    let minimumCost = Number.MAX_SAFE_INTEGER
    options.forEach((option) => {
        let cost = option.length*pushCost
        if(startAt != option[0])
            cost += moveCost
            
        for(let i = 1; i<option.length; i++){
            if(option[i-1] !== option[i])
                cost += moveCost
        }
        
        if(minimumCost>cost)
           minimumCost = cost
    })
    
    return minimumCost
};