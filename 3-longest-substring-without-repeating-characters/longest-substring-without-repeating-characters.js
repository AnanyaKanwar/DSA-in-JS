/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxlen = 0;
    let left = 0;
    let set = new Set();
    let count = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        count = right - left + 1;
        maxlen = Math.max(count, maxlen);
    }

    return maxlen;




};