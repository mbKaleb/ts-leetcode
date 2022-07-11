function containsDuplicate(nums: number[]): boolean {
    debugger
    for( let i:number = 0; i <= nums.length -2; i++ ){
        for(let j:number=(i+1); j <= nums.length -1; j++ ){
            if(nums[i] === nums[j]){return true}
        }
    }
    return false
};

containsDuplicate([1,2,3,4])