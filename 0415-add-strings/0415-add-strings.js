/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let str=BigInt(num1)
    let str1=BigInt(num2)
    let sum=str+str1
    let string=sum.toString()
    return string
    
};