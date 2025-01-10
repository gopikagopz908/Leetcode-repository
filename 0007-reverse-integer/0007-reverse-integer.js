/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    const min=-Math.pow(2,31)

    const max=Math.pow(2,31)-1

    let s=parseInt(Math.abs(x).toString().split('').reverse().join(''))*Math.sign(x)

   if(s<min||s>max){

   return 0;
   }
   return s;
    
};