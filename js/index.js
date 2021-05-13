
const longestNonRepeatedSubStr=(s)=>{
    let arr=[];
    let maxIndex=0;
    debugger;

    if (s.length >= 1) {
        for (let i=0; i<=s.length-1; i++) {
            let output=s[i];
            for (let j=i+1; j<=s.length-1; j++) {
                if (!output.includes(s[j]) && s[j]!==s[i]) {
                    output+=s[j]
                } else {
                    break;
                }
            }

            if (arr.length===0) {
                arr.push(output)
            } else {
                const temp=arr.some((_)=>_ === output)
                !temp && arr.push(output);
            }
        }
       arr.forEach((_,)=>{maxIndex=_.length-1 > maxIndex ? _.length-1 : maxIndex})
        return arr[arr.findIndex((_)=>_.length-1===maxIndex)].length
    } else if (s.match(/^\s+$/)) {
        return 1
    } else if (s.length === 0) {
        return 0
    }
    
}

console.log(longestNonRepeatedSubStr('c'));