/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n=nums.length;
    let calcProduct=1;
    let zeroCount=0;
    for(let i=0;i<n;i++){
        if(nums[i]===0) zeroCount++;
        else calcProduct*=nums[i];
    }
    let temp=new Array();
    for(let i=0;i<n;i++){
        if(zeroCount > 1){
            temp.push(0);
        }
        else if(nums[i]===0){
            temp.push(calcProduct);
        }
        else if(zeroCount===1){
            temp.push(0);
        }
        else{
            let divi=calcProduct/nums[i];
            temp.push(divi);
        }
    }
    return temp;
};