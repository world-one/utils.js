"use strict";
exports.__esModule = true;
function sleep(millisecond) {
    var appointmentTime = Date.now() + millisecond;
    while (Date.now() < appointmentTime) { }
}
exports["default"] = sleep;
