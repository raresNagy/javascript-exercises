function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

const sumAll = function(start, finish) {
    if(start < 0 || finish < 0
        || typeof(start) !== 'number' || typeof(finish)!== 'number')
        return "ERROR";
    if(start>finish) {
        let aux = start;
        start = finish;
        finish = aux;
    }
    return (finish * (finish + 1))/2 - ((start - 1 * start))/2

};

// Do not edit below this line
module.exports = sumAll;
