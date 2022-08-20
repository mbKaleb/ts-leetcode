console.log('connected');

function productExceptSelf(nums: number[]): number[] {

    let answer:number[] = new Array(nums.length).fill(1)
    let phelp:number = 1
    
    for (let i=1; i < nums.length ; i++) {
        phelp = phelp * nums[i - 1];
        answer[i] = phelp;
    }
    phelp = 1;
    for (let j=nums.length-2;j>=0;j--) {
        phelp = phelp * nums[j + 1];
        answer[j] = answer[j] * phelp;
    }
    return [1]
};

productExceptSelf([1, 2, 3, 4]);