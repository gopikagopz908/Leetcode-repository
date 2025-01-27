/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {


    let acronym=words.map((item)=>item[0]).join('')

    return acronym===s;
};