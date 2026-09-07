/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 1e9 + 7;
    // Map to store total distinct subsequences ending in each character 'a'-'z'
    const last = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i) - 97;
        
        // Sum of all distinct subsequences formed so far
        let currentTotal = 0;
        for (let j = 0; j < 26; j++) {
            currentTotal = (currentTotal + last[j]) % MOD;
        }
        
        // New count ending with s[i] is current total + 1 (for s[i] alone)
        last[charCode] = (currentTotal + 1) % MOD;
    }
    
    // Sum up all results ending in all characters
    let result = 0;
    for (let count of last) {
        result = (result + count) % MOD;
    }
    
    return result;
};