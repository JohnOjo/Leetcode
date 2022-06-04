/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
 var dietPlanPerformance = function(calories, k, lower, upper) {
    let points = 0
    const caloriesLength = calories.length
    for (let j = 0; k+j <= caloriesLength; j++) {
        const sliceSum = calories.slice(j, k+j).reduce((a, b) => a + b)
        if(sliceSum > upper)
            points++
        else if (sliceSum < lower)
            points--
    }
    return points
};

calories = [6,5,0,0], k = 2, lower = 1, upper = 5
//console.log(dietPlanPerformance(calories, k, lower, upper))

