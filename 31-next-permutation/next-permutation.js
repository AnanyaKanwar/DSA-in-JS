/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let pivot=-1;
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            pivot=i;
            break;
        }
    }
    let r=nums.length-1;
    while(r>pivot){
        if(nums[r]>nums[pivot]){
            // swap
            // in js we use destructuring for swapping
            [nums[pivot],nums[r]]=[nums[r],nums[pivot]];
            break;
        }
        r--;
    }

    let left=pivot+1;
    let suffix = nums.slice(left).sort((a, b) => a - b);
for (let i = 0; i < suffix.length; i++) {
    nums[left + i] = suffix[i];
}

    
};