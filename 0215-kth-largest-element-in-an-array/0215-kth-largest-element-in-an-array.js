/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let value=nums.sort((a,b)=>{
        return b-a
    })
     return value[k-1]
};