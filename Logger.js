var Logger = function() {
    this.logs = new Map()
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    const maxSeconds = 10
    
    if(this.logs.get(message)+maxSeconds > timestamp){
        return false
    }
    
    this.logs.set(message, timestamp)
    
    return true
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */