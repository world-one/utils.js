"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debouncer = /** @class */ (function () {
    function Debouncer(delay) {
        if (delay === void 0) { delay = 200; }
        this.delay = delay;
    }
    Debouncer.prototype.set = function (func) {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.timer = setTimeout(func, this.delay);
    };
    return Debouncer;
}());
exports.default = Debouncer;
