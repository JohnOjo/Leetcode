/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {   
    let sum = arr.reduce((a, b) => a + b)
    const arrSize = arr.length
    for (let i = 2; i <= arrSize; i++) {
        for (let j = 0; j <= arrSize-i; j++) {
            sum += Math.min(...arr.slice(j, i+j))
        }
    }
    
    return (sum%((10**9)+7))
};

arr = [3,1,2,4]
const { log } = require('console');
//console.log(sumSubarrayMins(arr))

const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Add an event listener
emitter.on('myEvent', (data) => {
  console.log('Event received:', data);
});

emitter.on('myEvent', console.log('dds'));
// Emit an event
emitter.emit('myEvent', [4]);
