function isValid(s: string): boolean {

    const stack = new Array;
    const key:object = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    }

    for (const char of s) {
        let sTop:any = stack[stack.length-1]
        if ( key[char] === undefined ) { stack.push(char) }
        else if (  key[char] === sTop )  { stack.pop() }
        else { stack.push(char) }
    }

    if (stack[0]) return false;
    return true;
};