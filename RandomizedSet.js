var RandomizedSet = function() {
    this.mapIndecesAsKeys = new Map()
    this.mapValuesAsKeys = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.mapValuesAsKeys.has(val))
        return false

    this.mapIndecesAsKeys.set(this.mapIndecesAsKeys.size, val)
    this.mapValuesAsKeys.set(val, this.mapValuesAsKeys.size)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.mapValuesAsKeys.has(val)) {
        const indexToOverwrite = this.mapValuesAsKeys.get(val)
        
        if(this.mapValuesAsKeys.size-1 === indexToOverwrite) {
            this.mapIndecesAsKeys.delete(indexToOverwrite)
            this.mapValuesAsKeys.delete(val)
        }
        else {
            const lastIndex = this.mapIndecesAsKeys.size-1
            const lastValue = this.mapIndecesAsKeys.get(lastIndex)

            this.mapIndecesAsKeys.set(indexToOverwrite, lastValue)
            this.mapValuesAsKeys.set(lastValue, indexToOverwrite)

            this.mapIndecesAsKeys.delete(lastIndex)
            this.mapValuesAsKeys.delete(val)
        }
        
        return true
    }
    
    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.mapIndecesAsKeys.size)

    return this.mapIndecesAsKeys.get(randomIndex)
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
