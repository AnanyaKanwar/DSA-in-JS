/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxFreq=0;
    let window=0;
    let charChange=0;
    let i=0;
    let j=0;
    let ans=0;
    let map=new Map();
    while(j<s.length){
        map.set(s[j],(map.get(s[j])||0)+1);
        maxFreq=Math.max(maxFreq,map.get(s[j]));
        window=j-i+1;
        charChange=window-maxFreq;
        if(charChange<=k){
            ans=Math.max(window,ans);
        }
        else if(charChange>k){
            map.set(s[i],map.get(s[i])-1);
            i++;
        }
        j++;
    }

    return ans;
    
};