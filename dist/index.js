"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unShiftBits = exports.shiftBits = void 0;
function shiftBits(...opt) {
    if (Array.isArray(opt[0]))
        opt = opt[0];
    let number = 0;
    opt = opt.reverse();
    for (let i = 0; i < opt.length; i++) {
        const mod = (opt[i] ? 1 : 0) * degree(2, i);
        number += mod;
    }
    return number;
}
exports.shiftBits = shiftBits;
function unShiftBits(number, size) {
    const bits = [];
    let maxDegree = 0;
    while (degree(2, maxDegree - 1) < number)
        maxDegree++;
    maxDegree--;
    let less = number;
    for (let i = maxDegree; i >= 1; i--) {
        const rest = less - degree(2, i - 1) >= 0;
        bits.push(rest);
        if (rest)
            less -= degree(2, i - 1);
    }
    const arrayLength = bits.length;
    for (let i = 0; i < size - arrayLength; i++) {
        bits.unshift(false);
    }
    return bits;
}
exports.unShiftBits = unShiftBits;
function degree(num, degree) {
    let out = num;
    if (degree === 0)
        return 1;
    for (let i = 1; i < degree; i++) {
        out *= num;
    }
    return out;
}
//# sourceMappingURL=index.js.map