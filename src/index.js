
exports.min = function min(array) {
    let min = 0;
    if (array != undefined && array.length != 0) {
        for (let el of array) {
            if (el < min) {
                min = el;
            }
        }
    }
    return min;
}

exports.max = function max(array) {
    let max = 0;
    if (array != undefined && array.length != 0) {
        for (let el of array) {
            if (el > max) {
                max = el;
            }
        }
    }
    return max;
}

exports.avg = function avg(array) {
    let avg = 0;
    if (array != undefined && array.length != 0) {
        for (let el of array) {
            avg = avg + el;
        }
        avg = avg / array.length
    }
    return avg;
}
