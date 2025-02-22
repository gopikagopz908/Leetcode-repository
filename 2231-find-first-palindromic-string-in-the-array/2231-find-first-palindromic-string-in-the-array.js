/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
   for(let i=0;i<words.length;i++){
    let palindrome=words[i].split('').reverse().join('')
    if(palindrome==words[i]){
        return words[i]
    }
   }
   return ""

    
};