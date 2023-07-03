
var HitCounter = function() {
    this.hits = new Map()
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    if(this.hits.has(timestamp))
        this.hits.set(timestamp, this.hits.get(timestamp)+1)
    else
        this.hits.set(timestamp, 1)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let numberOfHitsInRange = 0
    for (const [hitTimestamp, hitCount] of this.hits){
        if(timestamp<hitTimestamp){
            break
        }
        if(timestamp-300<hitTimestamp && hitTimestamp<=timestamp){
            numberOfHitsInRange += hitCount
        }
    }
    
    return numberOfHitsInRange
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */