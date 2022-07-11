function isAnagram(s: string, t: string): boolean | void {
    let mapS = new Map<string, number>();
    let mapT = new Map<string, number>();

    if (s.length != t.length) {return false}

    for (let i:number=0; i < s.length; i++) {
        mapS.has(s[i]) ?  mapS.set(s[i], mapS.get(s[i])! + 1) : mapS.set(s[i], 1)
        mapT.has(t[i]) ?  mapT.set(t[i], mapT?.get(t[i])! + 1) : mapT.set(t[i], 1)
    }
    console.log(mapS,mapT)

    for (const [key, value] of mapS) {
        const testVal = mapT.get(key)
        if (testVal !== value || (testVal === undefined && !mapT.has(key))) {
            return false;
        }
    }
    return true
};