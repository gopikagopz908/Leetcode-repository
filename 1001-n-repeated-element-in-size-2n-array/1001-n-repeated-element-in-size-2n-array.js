/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
let count={}
    for (let num of nums){
        count[num]=(count[num]||0)+1
       if  (count[num]>1){
        return num
       }

    }
    
};