/**
 * @param {number[]} w
 */
 var Solution = function(w) {
    this.allOptions = []
    w.forEach((weight, index) => {
        const options = index.toString().repeat(weight).split("")
        this.allOptions.push(...options)
    })
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    return this.allOptions[Math.floor(Math.random()*this.allOptions.length)]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */