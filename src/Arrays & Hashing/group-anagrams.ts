function groupAnagrams(strs: string[]): string[][] {
    const anagramMap = new Map<string, string[]>();
    const answerArray = new Array();
    
    for (let string of strs){
        let strArray:string[];
        let mapKey = [...string].sort().join('');
        let mapValue =  anagramMap.get(mapKey) || null
        mapValue? anagramMap.set(mapKey, [...mapValue , string]) : anagramMap.set(mapKey, [string]);
    }
    anagramMap.forEach((value) => {answerArray.push(value)})
    return answerArray;
};