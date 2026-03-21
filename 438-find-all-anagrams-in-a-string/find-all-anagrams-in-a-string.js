var findAnagrams = function(s, p) {
    let freqMap1 = new Map();
    let freqMap2 = new Map();
    let ans = [];

    // init maps
    for (let i = 0; i < 26; i++) {
        let ch = String.fromCharCode(97 + i);
        freqMap1.set(ch, 0);
        freqMap2.set(ch, 0);
    }

    // fill freqMap1
    for (let ch of p) {
        freqMap1.set(ch, freqMap1.get(ch) + 1);
    }

    let k = p.length;

    let i = 0;

    while (i < s.length) {

        // ➕ add new char
        freqMap2.set(s[i], freqMap2.get(s[i]) + 1);

        // ➖ remove old char
        if (i >= k) {
            freqMap2.set(s[i - k], freqMap2.get(s[i - k]) - 1);
        }

        // compare
        let isSame = true;
        for (let ch of freqMap1.keys()) {
            if (freqMap1.get(ch) !== freqMap2.get(ch)) {
                isSame = false;
                break;
            }
        }

        if (isSame) {
            ans.push(i - k + 1);
        }

        i++;
    }

    return ans;
};