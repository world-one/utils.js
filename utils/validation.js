"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
function isEmail(email) {
    var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    return emailRegex.exec(email) ? true : false;
}
exports.isEmail = isEmail;
