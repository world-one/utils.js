"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Throttle = /** @class */ (function () {
    function Throttle(delay) {
        if (delay === void 0) { delay = 200; }
        this.delay = delay;
    }
    Throttle.prototype.set = function (func) {
        var _this = this;
        if (this.timer)
            return;
        this.timer = setTimeout(function () {
            func();
            _this.timer = null;
        }, this.delay);
    };
    return Throttle;
}());
exports.default = Throttle;
