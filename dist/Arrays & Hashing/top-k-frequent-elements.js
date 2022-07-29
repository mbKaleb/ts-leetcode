"use strict";
function topKFrequent(nums, k) {
    const bucket = Array.from({ length: nums.length + 1 }, () => []);
    const result = [];
    const map = {};
    console.log(bucket);
    for (const n of nums) {
        map[n] = (n in map) ? 1 + map[n] : 1;
    }
    for (const c in map) {
        bucket[map[c]].push(c);
    }
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            bucket[i].forEach((elem) => result.push(elem));
            if (k == result.length) {
                return result;
            }
        }
    }
}
;
//# sourceMappingURL=top-k-frequent-elements.js.map