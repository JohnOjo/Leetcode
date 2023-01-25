/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    const heightsLength = heights.length
    if(heightsLength === 1){
        return 0
    }
    
    const expected = [...heights]
    expected.sort((a, b) => a - b)
    let wrongHeights = 0
    
    for(let index = 0; index<heightsLength; index++){
        if(expected[index] !== heights[index]){
           wrongHeights++
        }
    }
    
    return wrongHeights
};