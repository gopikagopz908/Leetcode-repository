/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    let sorted=nums.sort((a,b)=>{
        return a-b
    })

    let prod1=nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]

    let prod2=nums[0]*nums[1]*nums[nums.length-1]

    return Math.max(prod1,prod2)
    
};