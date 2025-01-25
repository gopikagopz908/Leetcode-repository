/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

 let arr=sentences.map((item)=>item.split(' ').length)  
 let length=Math.max(...arr)
 return length
};