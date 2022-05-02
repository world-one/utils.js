"use strict";
exports.__esModule = true;
function isEmpty(target) {
    if (target === undefined || target === null)
        return target;
    switch (target.constructor) {
        case Object:
            return isEmptyObject(target);
        case Array:
            return isEmptyArray(target);
        case String:
            return target.trim().length === 0;
        case Number: return false;
        default: return target;
    }
}
exports["default"] = isEmpty;
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
function isEmptyArray(arr) {
    return arr.length === 0;
}
