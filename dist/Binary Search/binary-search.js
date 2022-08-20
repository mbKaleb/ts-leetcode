"use strict";
function search(nums, target) {
    let a = -1;
    let b = nums.length;
    while (a + 1 < b) {
        let c = Math.floor((a + b) / 2);
        if (nums[c] === target)
            return c;
        else if (nums[c] < target)
            a = c;
        else if (nums[c] > target)
            b = c;
    }
    return -1;
}
//# sourceMappingURL=binary-search.js.map