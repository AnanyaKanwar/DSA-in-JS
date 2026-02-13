/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n= nums.length;
    nums.sort((a, b) => a - b);
    let ans= [];

    for(let i=0; i<n-2; i++){
        //duplicate case
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left= i+1, right= n-1;

        while(left < right){
            let sum= nums[i] + nums[left] + nums[right];

            if(sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);

                //duplicate case
                while(left<right && nums[left] === nums[left+1]) left++;
                while(left<right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
            }
            else if (sum < 0) left++;
            else right--;
        }
    }
    return ans;
};
