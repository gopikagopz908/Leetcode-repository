/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    

  const even= nums.filter((item)=>item%2===0)
  const odd=nums.filter((odds)=>odds%2!==0)
  return [...even,...odd]
    
};