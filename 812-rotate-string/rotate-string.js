/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length!=goal.length) return false;

    let temp=s+s;

    if(temp.includes(goal)) return true;

    return false;
    
};