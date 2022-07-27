"use strict";
function twoSum(nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let targetIndex = target - nums[i];
        if (numsMap.get(targetIndex) !== undefined) {
            return ([numsMap.get(targetIndex), i]);
        }
        numsMap.set(nums[i], i);
    }
}
;
//# sourceMappingURL=two-sum.js.map