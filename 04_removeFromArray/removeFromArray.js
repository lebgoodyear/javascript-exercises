const removeFromArray = function(array, ...toRemove) {
    for (entry of toRemove) {
        array = array.filter(element => element !== entry);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
