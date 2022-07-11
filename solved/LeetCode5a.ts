function isPalindrome(x: number): boolean {
    let input:number[] = String(x).split("").map((x)=>{
        return Number(x)
    })
    console.log(input)

    for (let i:number=0; i < Math.floor(input.length/2); i++){
        let j:number = input.length - (i+1);
       if (!(input[i] === input[j])) {
           console.log(false)
           return false
        };
    }
    console.log(true)
    return true;
};