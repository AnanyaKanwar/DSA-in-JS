var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let temp = new Set();
    let maxLen = 0;

    while (right < s.length) {

        while (temp.has(s[right])) {
            temp.delete(s[left]); // ✅ remove from set
            left++;
        }

        temp.add(s[right]); // ✅ correct method

        let len = right - left + 1;
        maxLen = Math.max(maxLen, len); // ✅ fix

        right++; // ✅ move right pointer
    }

    return maxLen;
};