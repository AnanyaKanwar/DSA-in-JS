/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let ans = new Array();
    let temp = new Array();
   arr.sort((a, b) => a - b)
    let i = 0;
    let j = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;
    while (j < arr.length) {
        j = i + 1;
        let diff = arr[j] - arr[i];
        let temp = new Array();
        if (diff < minDiff) {
            minDiff = diff;
            ans=[];
            temp.push(arr[i]);
            temp.push(arr[j]);;
            ans.push(temp)
        }
        else if (diff === minDiff) {
            temp.push(arr[i]);
            temp.push(arr[j]);;
            ans.push(temp)
        }
        i++;
    }
    return ans;

};