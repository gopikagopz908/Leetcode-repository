/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wrd=s.split(" ")
    let wrds=wrd.filter((item)=>item!=='')
    return wrds.reverse().join(" ")
};