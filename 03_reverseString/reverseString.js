const reverseString = function (ogString) {
    let result = ''
    for (i = ogString.length - 1; i >= 0; i--) {
        result += ogString[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
