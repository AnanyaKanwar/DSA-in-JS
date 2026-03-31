/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let tempMap = new Map();
    tempMap.set('a', 0);
    tempMap.set('b', 0);
    tempMap.set('c', 0);

    let i = 0;
    let count = 0;

    for (let j = 0; j < s.length; j++) {
        let ch = s[j];
        tempMap.set(ch, tempMap.get(ch) + 1);

        // when all 3 chars exist
        while (tempMap.get('a') > 0 &&
               tempMap.get('b') > 0 &&
               tempMap.get('c') > 0) {

            count += (s.length - j);

            let leftChar = s[i];
            tempMap.set(leftChar, tempMap.get(leftChar) - 1);
            i++;
        }
    }

    return count;
};