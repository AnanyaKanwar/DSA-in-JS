/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let prev=0;
    let curr=1;
    let removal=0;
    while(curr<colors.length){
        if(colors[curr]===colors[prev]){
            removal+=Math.min(neededTime[curr], neededTime[prev]);
            if(neededTime[curr]>neededTime[prev]){
                prev=curr;
            }
            curr++;
        }
        else{
            prev=curr;
            curr++;
        }
    }

    return removal;
};