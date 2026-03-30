/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i=0;
    let j=0;
    let zeroCount=0;
    let oneCount=0;
    let maxCount=0;
    while(i<nums.length && j<nums.length){
        if(nums[j]===0 && zeroCount<k){
            oneCount++;
            zeroCount++;
            j++;
        }
        else if(nums[j]===0 && zeroCount>=k){
            maxCount=Math.max(oneCount,maxCount);
            if(nums[i]===0) zeroCount--;
            oneCount--;;
            i++;
        }
        else if(nums[j]===1){
            oneCount++;
            j++;
        }
        
    }
    maxCount = Math.max(oneCount, maxCount);
    return maxCount;
};