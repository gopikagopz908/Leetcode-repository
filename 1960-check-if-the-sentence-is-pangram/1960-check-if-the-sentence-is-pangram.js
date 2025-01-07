/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    const s=new Set(sentence)

    return s.size===26;
    
};