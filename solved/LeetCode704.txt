function search(nums: number[], target: number): number {
    let a:number = 0;
    let b:number = nums.length-1;
    
    if (nums[a] == target ) {return a};
    if (nums[b] == target ) {return b};
    
    while (a+1 < b) {
        let c:number = Math.floor((b+a)/2);
        if ( nums[c] == target ) {
            return (c)
        }
        if ( nums[c] < target ) {
            a = c
        } else {
            b = c
        }
    }
    return -1;
};