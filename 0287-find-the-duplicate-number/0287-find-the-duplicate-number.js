/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let repeat={}
    for(let num of nums){
        repeat[num]=(repeat[num]||0)+1
    }
    return Number(Object.keys(repeat).find((item)=>repeat[item]>1))
};