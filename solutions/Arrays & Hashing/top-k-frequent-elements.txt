function topKFrequent(nums: number[], k: number): number[] {
    const bucket:any[][] = Array.from({ length: nums.length +1}, () => [])
    const result:number[] = [];
    const map:any = {};
    console.log(bucket)

    for (const n of nums) {
        map[n] = (n in map) ? 1 + map[n] : 1;
    }

    for (const c in map) {
        bucket[map[c]].push(c)
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            bucket[i].forEach((elem)=> result.push(elem));
            if(k == result.length){
                return result;
            }
        }
    }
};