/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    // let nbr=num.join('')

    // let sum=Number(nbr)+Number(k)

    // let arr=sum.toString().split('').map(Number)

    // return arr

    return (BigInt(num.join("")) + BigInt(k)).toString().split('').map(Number)

    
};