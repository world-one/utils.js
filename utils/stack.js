"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack(data) {
        this.result = data;
    }
    Object.defineProperty(Stack.prototype, "value", {
        get: function () {
            return this.result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "peek", {
        get: function () {
            return this.result[this.result.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.push = function (element) {
        this.result = __spreadArrays(this.result, [element]);
    };
    Stack.prototype.pop = function () {
        var lastIndex = this.result.length - 1;
        var last = this.result[lastIndex];
        this.result.length = lastIndex;
        return last;
    };
    return Stack;
}());
exports.default = Stack;
