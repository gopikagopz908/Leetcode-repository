/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {

    let count=0

    for(let i=1;i<=a;i++){
        if(a%i===0&&b%i===0){
        count++
        }
    }

    return count


    
};