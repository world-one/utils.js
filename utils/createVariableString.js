"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createVariableString(text, variables) {
    return text.replace(new RegExp('{([^{]+)}', 'g'), function (_, name) { return variables[name]; });
}
exports.default = createVariableString;
