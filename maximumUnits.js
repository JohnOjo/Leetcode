/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let maximumUnits = 0
    if(truckSize === 0){
        return maximumUnits
    }
    
    const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1])
    
    let currentNumberOfBoxes = 0
    for(let i = 0; i<sortedBoxTypes.length; i++){
        const boxType = sortedBoxTypes[i]
        const numberOfBoxes = boxType[0]
        currentNumberOfBoxes += numberOfBoxes
        const numberOfUnits = boxType[1]
        
        if(currentNumberOfBoxes <= truckSize){
            maximumUnits += (numberOfBoxes * numberOfUnits)
        }
        else if(currentNumberOfBoxes === truckSize){
            maximumUnits += (numberOfBoxes * numberOfUnits)
            break
        }
        else{
            const overload = currentNumberOfBoxes - truckSize
            const spaceLeft = numberOfBoxes - overload
            maximumUnits += (spaceLeft * numberOfUnits)
            break
        }
    }
    
    return maximumUnits
};