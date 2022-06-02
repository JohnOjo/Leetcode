
/**
 * @param {number} size
 */
 MovingAverage = function(size) {
    this.size = size
    this.array = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.array.push(val)
  let ave
  if(this.array.length > this.size){
    ave = this.array.slice(this.array.length-this.size, this.array.length).reduce((accumulator, curr) => accumulator + curr)/this.size
  }
  else {
    ave = this.array.reduce((accumulator, curr) => accumulator + curr)/this.array.length
  }
  return ave
};

// const movingAverage = new MovingAverage(3);
// console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
// console.log(movingAverage.next(1)); // return 5.5 = (1 + 10) / 2
// console.log(movingAverage.next(1)); // return 4.66667 = (1 + 10 + 3) / 3
// console.log(movingAverage.next(2)); // return 6.0 = (10 + 3 + 5) / 3
// console.log(movingAverage.next(2)); // return 6.0 = (10 + 3 + 5) / 3
// console.log(movingAverage.next(2)); // return 6.0 = (10 + 3 + 5) / 3

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */