"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addCommaToNumber(target) {
    if (!target)
        return target;
    if (typeof target === 'string') {
        return Number(target).toLocaleString();
    }
    return target.toLocaleString();
}
exports.default = addCommaToNumber;
