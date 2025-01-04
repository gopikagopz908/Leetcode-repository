/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

    let arr=Array.from(String(n),Number)

    let sum=arr.reduce((acc,curr)=>acc+curr)

    let p =arr.reduce((acc,curr)=>acc*curr)

    return p-sum

}