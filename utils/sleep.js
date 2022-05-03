"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(millisecond) {
    var appointmentTime = Date.now() + millisecond;
    while (Date.now() < appointmentTime) { }
}
exports.default = sleep;
