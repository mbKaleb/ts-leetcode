function twoSum(nums: number[], target: number): number[] | void {
    const hashMap = new Map<number, number>();

    for ( let i:number = 0; i < nums.length ; i++ ){
        let targetBucket:number = hashMap?.get(target - nums[i])!; //value || index
        if (targetBucket != undefined) {
            return [targetBucket, i];
        }
        hashMap.set(nums[i], i)
    }
    return;
};

twoSum([2,7,11,15], 9)

twoSum([2,7,11,15], 17)

