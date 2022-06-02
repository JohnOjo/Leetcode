var runningSum = function(nums) {
    var output = []
    var sum = 0;
    nums.forEach(num => {
        sum += num
        output.push(sum)        
    });
    return output
};
nums = [1,2,3,4]
console.log(runningSum(nums))