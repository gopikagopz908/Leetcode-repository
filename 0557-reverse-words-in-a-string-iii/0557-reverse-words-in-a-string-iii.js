/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let r= s.split(' ').map((item)=>item.split('').reverse().join('')).join(' ')
    
     return r


};