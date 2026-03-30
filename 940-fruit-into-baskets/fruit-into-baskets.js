/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let n = fruits.length;
    let map = new Map();
    let i = 0;
    let j = 0;
    let maxCount = 0;
    while (i < n && j < n) {
        let key = fruits[j];
        map.set(key, (map.get(key) || 0) + 1);
        while (map.size > 2) {
            let removal = fruits[i];
            map.set(removal, map.get(removal) - 1);
            if (map.get(removal) === 0) {
                map.delete(removal);
            }
            i++;
        }
        maxCount = Math.max(maxCount, j - i + 1);
        j++;
    }
    return maxCount;

};