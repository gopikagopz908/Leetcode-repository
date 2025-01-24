/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
     let val=original
    let arr=nums.sort((a,b)=>{
        return a-b
    })

    for(let i=0;i<arr.length;i++){
       if( val==arr[i]){
         val= val*2;
       }
    }
    return val


    
};