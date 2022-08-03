const removeFromArray = function (array, ...elements) {
    return array.filter(x => !elements.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
