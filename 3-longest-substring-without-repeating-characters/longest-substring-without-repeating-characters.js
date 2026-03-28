var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let temp = new Set();
    let i = 0;
    let j = 0;
    let maxLen = 0;

    while (i < n && j < n) {
        while (j < n && temp.has(s[j])) {   
            temp.delete(s[i]);
            i++;
        }
        temp.add(s[j]);                  
        maxLen = Math.max(temp.size, maxLen); 
        j++;
    }
    return maxLen;
};