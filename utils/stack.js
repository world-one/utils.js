"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
        this.result = __spreadArray(__spreadArray([], this.result, true), [element], false);
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
