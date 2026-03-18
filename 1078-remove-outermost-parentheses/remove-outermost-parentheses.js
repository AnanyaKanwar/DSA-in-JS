var removeOuterParentheses = function(s) {
    let stack = [];
    let result = "";

    for (let char of s) {
        if (char === "(") {
            // Only add if it's NOT the outermost
            if (stack.length > 0) {
                result += char;
            }
            stack.push(char);
        } else {
            // Pop first
            stack.pop();

            // Only add if it's NOT the outermost
            if (stack.length > 0) {
                result += char;
            }
        }
    }

    return result;
};