"use strict";
function twoSum(numbers, target) {
    debugger;
    let j = numbers.length;
    for (let i = 1; i < j; i++) {
        while (numbers[i - 1] + numbers[j - 1] > target) {
            j--;
        }
        if (numbers[i - 1] + numbers[j - 1] === target)
            return [i, j];
    }
}
//# sourceMappingURL=two-sum-II.js.map