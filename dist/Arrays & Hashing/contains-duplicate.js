"use strict";
function containsDuplicate(nums) {
    const hashMap = new Map();
    for (const i in nums) {
        if (hashMap.get(nums[i])) {
            return true;
        }
        hashMap.set(nums[i], true);
    }
    return false;
}
//# sourceMappingURL=contains-duplicate.js.map