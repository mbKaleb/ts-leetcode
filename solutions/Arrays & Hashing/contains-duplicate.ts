function containsDuplicate(nums: number[]): any {
    const hashMap = new Map<number, boolean>();

    for (const i in nums){
        if (hashMap.get(nums[i])) {
            return true
        }
        hashMap.set(nums[i], true)
    }
    return false
}