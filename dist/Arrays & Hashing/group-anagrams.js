"use strict";
function groupAnagrams(strs) {
    const anagramMap = new Map();
    const answerArray = new Array();
    for (let string of strs) {
        let strArray;
        let mapKey = [...string].sort().join('');
        let mapValue = anagramMap.get(mapKey) || null;
        mapValue ? anagramMap.set(mapKey, [...mapValue, string]) : anagramMap.set(mapKey, [string]);
    }
    anagramMap.forEach((value) => { answerArray.push(value); });
    return answerArray;
}
;
//# sourceMappingURL=group-anagrams.js.map