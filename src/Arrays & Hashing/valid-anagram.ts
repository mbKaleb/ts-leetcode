function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const wordMapS = new Map<string, number>();
    const wordMapT = new Map<string, number>();

    for (let i = 0; i < s.length; i++){
        wordMapS.set(s[i], (wordMapS.get(s[i]) +1 || 1))
        wordMapT.set(t[i], (wordMapT.get(t[i]) +1 || 1))
    }

    let i:number = 0;
    while(wordMapS.get(s[i])){
        if (wordMapS.get(s[i]) === wordMapT.get(s[i])){
            i++
            continue;
        } else return false;
    }
    return true
};
