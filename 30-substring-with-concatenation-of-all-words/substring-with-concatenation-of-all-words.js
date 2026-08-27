/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];
    
    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const sLen = s.length;
    
    if (sLen < totalLen) return [];

    const expectedCounts = new Map();
    for (const word of words) {
        expectedCounts.set(word, (expectedCounts.get(word) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        const currentCounts = new Map();
        let matchedWords = 0;

        while (right + wordLen <= sLen) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (expectedCounts.has(word)) {
                currentCounts.set(word, (currentCounts.get(word) || 0) + 1);
                matchedWords++;

                while (currentCounts.get(word) > expectedCounts.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentCounts.set(leftWord, currentCounts.get(leftWord) - 1);
                    matchedWords--;
                    left += wordLen;
                }

                if (matchedWords === wordCount) {
                    result.push(left);
                }
            } else {
                currentCounts.clear();
                matchedWords = 0;
                left = right;
            }
        }
    }

    return result;
};