function search(nums: number[], target: number): number {

    let a: number = -1;
    let b: number = nums.length;

    while (a + 1 < b) {
        let c: number = Math.floor((a + b) / 2);
        if (nums[c] === target) return c;
        else if (nums[c] < target) a = c;
        else if (nums[c] > target) b = c;
    }
    return -1;
}