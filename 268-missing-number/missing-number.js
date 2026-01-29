/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum=0;
    let n=nums.length;
    let totalSum=(n*(n+1))/2;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }

    let result=totalSum-sum;

    return result;
    
};