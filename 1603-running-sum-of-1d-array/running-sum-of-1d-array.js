/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let preSum=0;
    for (let i=0;i<nums.length;i++){
        preSum+=nums[i];
        nums[i]=preSum;
    }
    return nums;
    
};