/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    let str=''

    while(columnNumber>0){
        columnNumber--;

        str=str+String.fromCharCode((columnNumber%26)+65)
        columnNumber=Math.floor(columnNumber/26)

    }

    str=str.split('').reverse().join('')
    return str;
    
};