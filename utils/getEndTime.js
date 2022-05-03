"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getEndTime(func) {
    var start = new Date();
    func();
    // 단항 연산자를 사용해서 new Date의 결과를 숫자로 취급
    return +new Date() - +start;
}
exports.default = getEndTime;
