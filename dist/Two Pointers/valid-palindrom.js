"use strict";
function isPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi, "");
    let a = 0;
    let b = s.length - 1;
    while (a < b) {
        if (s[a].toLowerCase() !== s[b].toLowerCase())
            return false;
        a++;
        b--;
    }
    return true;
}
;
//# sourceMappingURL=valid-palindrom.js.map