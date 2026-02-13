var lengthOfLongestSubstring = function(s) {
    let temp = new Set();
    let n = s.length;
    let i = 0; // Right pointer
    let j = 0; // Left pointer
    let maxCount = 0;

    while (i < n) {
        // If we find a duplicate, shrink the window from the left (j)
        // until the duplicate character s[i] is removed from the set
        while (temp.has(s[i])) {
            temp.delete(s[j]);
            j++;
        }

        // Add the current character and update max
        temp.add(s[i]);
        maxCount = Math.max(maxCount, temp.size);
        
        i++;
    }

    return maxCount;
};