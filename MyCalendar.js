var MyCalendar = function() {
    this.calendar = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let index = 0; index<this.calendar.length; index++) {
        const lowerBound = this.calendar[index][0]
        const upperBound = this.calendar[index][1]
        if((lowerBound <= start && start < upperBound) 
            || (lowerBound < end && end <= upperBound)
            || (start <= lowerBound && upperBound <= end)){
                return false
        }
    }

    this.calendar.push([start, end])

    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */