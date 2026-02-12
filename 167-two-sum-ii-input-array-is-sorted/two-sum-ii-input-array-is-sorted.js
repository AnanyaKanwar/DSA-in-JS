/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1;
    let num=[];
    
    while(i<j){
        let sum=numbers[i]+numbers[j];
        if(sum==target){
            num.push(i+1);
            num.push(j+1);
            break;
        }
        else if(sum>target){
            j--;
        }
        else {
            i++;
        }
    }
    return num;
    
};