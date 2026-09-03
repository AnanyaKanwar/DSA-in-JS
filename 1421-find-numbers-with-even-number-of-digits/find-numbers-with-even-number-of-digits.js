/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let n=nums.length;
    let i=0;
    let j=0;
    let evenCount=0;
    while(i<n){
        let count=0;
        if(nums[i]>0){
            j=nums[i];
            while(j>0){
                j=Math.floor(j/10);
                count++;
            }
            if(count%2===0){
                evenCount++;
            }
        }
        i++;
    }
    return evenCount;
    
};