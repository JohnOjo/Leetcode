/**
 * @param {number[][]} items
 * @return {number[][]}
 */
 var highFive = function(items) {
    const studentIds = new Set()
    items.forEach((item) => {
        studentIds.add(item[0])
    })
    
    const result = []
    studentIds.forEach((studentId) => {
        const studentScores = items.filter(item => item[0] === studentId)
        studentScores.sort((a, b) => b[1] - a[1])
        const topFiveScores = studentScores.slice(0, 5)
        let sum = 0;
        topFiveScores.forEach((score) => {
            sum += score[1];
        })
        const topFiveAverage = Math.floor(sum/5)
        result.push([studentId, topFiveAverage])
    })
    
    result.sort((a, b) => a[0] - b[0])
    
    return result
};