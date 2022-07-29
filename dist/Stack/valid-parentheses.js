"use strict";
function isValid(s) {
    const stack = new Array;
    const key = {
        "}": "{",
        "]": "[",
        ")": "("
    };
    for (const char of s) {
        let sTop = stack[stack.length - 1];
        if (key[char] === undefined) {
            stack.push(char);
        }
        else if (key[char] === sTop) {
            stack.pop();
        }
        else {
            stack.push(char);
        }
    }
    if (stack[0])
        return false;
    return true;
}
;
//# sourceMappingURL=valid-parentheses.js.map