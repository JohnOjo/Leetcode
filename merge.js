var merge = function(intervals) {
    var transformedIntervals = new Set();
    intervals.forEach((interval, index) => {
        var cloneArray = [...intervals]
        cloneArray.splice(index,1);

        var overLappingInterval = cloneArray
        .find((sliceInterval) => (interval[1] >= sliceInterval[0] && interval[0] <= sliceInterval[1])
        || (sliceInterval[1] >= interval[1] && interval[0] >= sliceInterval[0]))

        //console.log(interval)
        if(overLappingInterval) {
            //console.log(cloneArray)
            //console.log(overLappingInterval)
            const min = Math.min(...interval, ...overLappingInterval)
            const max = Math.max(...interval, ...overLappingInterval)
            const newInterval = [min, max]
            if(index+1<intervals.length) {
                intervals[index] = newInterval
                intervals[intervals.indexOf(overLappingInterval)] = newInterval
            }
            let newOverlap = Array.from(transformedIntervals).find((i) => {
                const iSplitArray = i.split(',')
                //console.log(iSplitArray)
                return (parseInt(iSplitArray[0]) == newInterval[0]
                    || parseInt(iSplitArray[1]) == newInterval[1])
            })
            
            if (newOverlap){
                //console.log(newOverlap)
                const minX = Math.min(...newInterval, ...overLappingInterval)
                const maxX = Math.max(...newInterval, ...overLappingInterval)
                const newIntervalX = [minX, maxX]
                transformedIntervals.has(newInterval.toString()) && transformedIntervals.delete(newInterval.toString())
                transformedIntervals.has(overLappingInterval.toString()) && transformedIntervals.delete(overLappingInterval.toString())
                transformedIntervals.add(newIntervalX.toString())
            }
            else {
                transformedIntervals.add(newInterval.toString())
            }
        }
        else {
            transformedIntervals.add(interval.toString())
        }
    });
    
    var output = Array.from(transformedIntervals)
    output = output.map(out => {
        var outArray = out.split(',');
        outArray = outArray.map(o => {return parseInt(o)})
        return outArray
    })
    return output
};
var intervals = [[1,4],[0,2],[3,5]]
console.log(merge(intervals))