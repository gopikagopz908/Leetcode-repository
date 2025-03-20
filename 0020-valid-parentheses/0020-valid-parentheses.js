/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while (s.indexOf("{}") !== -1 || s.indexOf("()") !== -1 || s.indexOf("[]") !== -1)
        s = s.replace(s.indexOf("{}") !== -1 ? "{}" : s.indexOf("()") !== -1 ? "()" : s.indexOf("[]") !== -1 ? "[]" : null, '')
    return s === ""
};