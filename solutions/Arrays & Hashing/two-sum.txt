function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>();
    
    for (let i=0; i< nums.length;i++){
        let targetIndex:number = target - nums[i]
        if (numsMap.get(targetIndex) !== undefined) { 
            return ([numsMap.get(targetIndex)!, i])
        }
        numsMap.set(nums[i], i)
    }
};