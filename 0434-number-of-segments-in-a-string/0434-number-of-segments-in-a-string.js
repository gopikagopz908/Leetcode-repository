/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

    return s.split(/\s+/).filter(item=>item.length>0).length;
    
    
};