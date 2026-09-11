/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxiSum = Number.MIN_SAFE_INTEGER; 
    let j = 0;
    let sum = 0;
    
    while (j < nums.length) {
        sum += nums[j];
        if (sum > maxiSum) {
            maxiSum = sum;
        }
        if (sum <0) {
            sum=0;
        }
        j++;
    }
    return maxiSum;
};