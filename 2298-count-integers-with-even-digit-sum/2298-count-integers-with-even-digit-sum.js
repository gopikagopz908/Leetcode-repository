/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {


let count=0;
    for(let i=1;i<=num;i++){
        if([...String(i)].reduce((sum,digit)=>sum+Number(digit),0)%2===0){
            count++
        }
    }
    return count;
    
};