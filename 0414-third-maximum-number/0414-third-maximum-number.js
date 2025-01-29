/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    let set=new Set(nums)
    const arr=Array.from(set);
    return arr.sort((a,b)=>b-a).length<3?arr[0]:arr[2]
    
};