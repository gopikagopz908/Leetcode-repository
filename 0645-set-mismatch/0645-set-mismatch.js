/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    let set=new Set()
    let duplicate;

    for(let num of nums){
        if(set.has(num)){
            duplicate=num
            break;
        }
        set.add(num)
    }

    let n=nums.length

    let expectedlen=(n*(n+1))/2
    let actuallen=nums.reduce((a,b)=>a+b,0)
    let missednbr=expectedlen-(actuallen-duplicate)
    return[duplicate,missednbr]
};