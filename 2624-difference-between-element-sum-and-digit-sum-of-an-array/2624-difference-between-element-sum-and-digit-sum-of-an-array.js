/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

    let elementsum=nums.reduce((acc,curr)=>acc+curr,0)
    let digitsum=nums.map((item)=>item.toString().split('')).flat()
    // let a=digitsum.flat()
    let sum=digitsum.reduce((a,b)=>Number(a)+Number(b),0)
    return elementsum-sum

    
};