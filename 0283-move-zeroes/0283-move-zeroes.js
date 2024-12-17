/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let arr=nums.filter((item)=>item!==0)
    let arr1=nums.filter((item)=>item===0)
    let arr3=[...arr,...arr1]
    return nums.splice(0,nums.length,...arr3)
    
};