"use strict";
exports.__esModule = true;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports["default"] = randomNumber;
