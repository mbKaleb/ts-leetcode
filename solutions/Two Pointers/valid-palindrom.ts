function isPalindrome(s: string): boolean {

    s = s.replace(/[^a-z0-9]/gi, "");

    let a:number = 0
    let b:number = s.length -1;

    while (a < b){
        if (s[a].toLowerCase() !== s[b].toLowerCase()) return false;
        a++; b--
    }
    return true
};