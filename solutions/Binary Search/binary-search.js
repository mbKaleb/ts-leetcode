function search(nums, target) {
    var a = -1;
    var b = nums.length;
    while (a + 1 < b) {
        var c = Math.floor((a + b) / 2);
        if (nums[c] === target)
            return c;
        else if (nums[c] < target)
            a = c;
        else if (nums[c] > target)
            b = c;
    }
    return -1;
}
