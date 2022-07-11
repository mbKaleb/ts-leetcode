function lengthOfLongestSubstring(s: string):number {

    let input: string[] = Array.from(s)
    let k: string[] = [];
    let count:number =  1;

    if (!input[0]) {
        return 0;
    };

    for (let i:number = 0;i < input.length; i++) {
        k = [];
          for (let j:number = i; j < input.length ; j++) {
            if ( k.find(char => char == input[j]) ) { break }
            else { k.push(input[j]) };
        }
        if(k.length>count) {
            {count = k.length };
        }
    };
    return (count);
}
//Completed

// function lengthOfLongestSubstring(s: string):number {

//     let input: string[] = Array.from(s)
//     let k: string[] = [];
//     let count:number =  1;

//     if (!input[0]) {
//         return 0;
//     };

//     for (let i:number = 0;i < input.length; i++) {
//         k = [];
//           for (let j:number = i; j < input.length ; j++) {
//             if ( k.find(char => char == input[j]) ) { break }
//             else { k.push(input[j]) };
//         }
//         if(k.length>count) {
//             {count = k.length };
//         }
//     };
//     return (count);
// }