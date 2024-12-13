/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

 let num= nums.map((item)=>item*item)
 return  num.sort((a,b)=>{
    return (a-b)
 })
    
};