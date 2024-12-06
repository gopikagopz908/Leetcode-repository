/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num=digits.join("")
    let nums=BigInt(num)+BigInt(1)
    let add=String(nums).split("").map((item)=>Number(item))
    
    

    return add
    
};