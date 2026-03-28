/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let leftsum=0;
    let maxSum=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<k;i++){
        leftsum+=cardPoints[i];
    }
    maxSum=Math.max(maxSum,leftsum);

    leftIndex=k-1;
    rightIndex=cardPoints.length-1;
    let rightSum=0;

    while(leftIndex>=0){
        leftsum=leftsum-cardPoints[leftIndex];
        rightSum+=cardPoints[rightIndex];
        let totalSum=leftsum+rightSum;
        maxSum=Math.max(maxSum,totalSum);
        leftIndex--;
        rightIndex--;
    }


    return maxSum;
};