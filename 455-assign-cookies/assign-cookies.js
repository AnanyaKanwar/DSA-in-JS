/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {

    // sort both arrays
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0; // child pointer
    let j = 0; // cookie pointer
    let count = 0;

    while (i < g.length && j < s.length) {

        // if cookie satisfies child
        if (s[j] >= g[i]) {
            count++;
            i++; // next child
            j++; // cookie used
        } else {
            j++; // try bigger cookie
        }
    }

    return count;
};