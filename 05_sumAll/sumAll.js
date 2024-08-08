const sumAll = function(num1, num2) {
    let total = 0;
    if (num1 < 0 || 
        num2 < 0 || 
        !Number.isInteger(num1) ||
        !Number.isInteger(num2)) {
        total = "ERROR";
    } else {
        let biggerNum = Math.max(num1, num2);
        let smallerNum = Math.min(num1, num2);
        for (let i = smallerNum; i <= biggerNum; i++) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
