"use strict";
function productExceptSelf(nums) {
    let answer = new Array(nums.length).fill(1);
    let phelp = 1;
    for (let i = 1; i < nums.length; i++) {
        phelp = phelp * nums[i - 1];
        answer[i] = phelp;
    }
    phelp = 1;
    for (let j = nums.length - 2; j >= 0; j--) {
        phelp = phelp * nums[j + 1];
        answer[j] = answer[j] * phelp;
    }
    return [1];
}
//# sourceMappingURL=product-of-array-except-self.js.map