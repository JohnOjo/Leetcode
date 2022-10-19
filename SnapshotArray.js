/**
 * @param {number} length
 */
 var SnapshotArray = function(length) {
    this.map = new Map()
    this.map.set(0, [])
    this.numberOfSnapshots = 0
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    const snapshot = this.map.get(this.numberOfSnapshots)
    snapshot[index] = val
    this.map.set(this.numberOfSnapshots, [...snapshot])
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    const snapId = this.numberOfSnapshots
    const snapshot = this.map.get(this.numberOfSnapshots)
    this.numberOfSnapshots++
    this.map.set(this.numberOfSnapshots, [...snapshot])
    return snapId
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const snapshot = this.map.get(snap_id)
    const element = snapshot[index]
    return element == null ? 0 : element
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */