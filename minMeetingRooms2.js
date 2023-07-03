/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    const intervalsSize = intervals.length
    if(intervalsSize === 1){
        return 1
    }

    let startTimeSorted = intervals.map((inter) => inter[0])
    let endTimeSorted = intervals.map((inter) => inter[1])
    startTimeSorted.sort((a, b) => a - b)
    endTimeSorted.sort((a, b) => a - b)
    
    let usedRooms = 0
    let endCounter = 0
    intervals.forEach((interval, index) => {
        if(startTimeSorted[index] >= endTimeSorted[endCounter]){
            usedRooms--
            endCounter++
        }
        usedRooms++
    })

    return usedRooms
};