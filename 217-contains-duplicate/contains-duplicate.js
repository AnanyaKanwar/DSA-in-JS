/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newSet=new Set();
    for(let i=0;i<nums.length;i++){
        newSet.add(nums[i]);
    }
    return newSet.size!=nums.length;

    
};