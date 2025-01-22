/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    

let str=n.toString()
let ans=0

for(let i=0;i<str.length;i++){
    if(i%2==0)
    ans=ans+Number(str[i])
    else
    ans=ans-Number(str[i])
}
return ans
};