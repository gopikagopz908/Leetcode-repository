/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   
    let arrs=s.split("").sort()
    let arrt=t.split("").sort()

    for(let i=0;i<arrt.length;i++){
        if(arrs[i]!==arrt[i]){
            return arrt[i]
        }
    }
    
};