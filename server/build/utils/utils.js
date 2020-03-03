"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getToday() {
    let date = new Date();
    let fmt = 'yyyyMMdd';
    if (/(y+)/.test(fmt)) { // 年
        let year = date.getFullYear().toString();
        fmt = fmt.replace(RegExp.$1, year);
    }
    if (/(M+)/.test(fmt)) { // 月
        let mouth = date.getMonth() + 1;
        if (mouth < 10) {
            mouth = '0' + mouth;
        }
        fmt = fmt.replace(RegExp.$1, mouth);
    }
    if (/(d+)/.test(fmt)) { // 日
        let mydate = date.getDate();
        if (mydate < 10) {
            mydate = '0' + mydate;
        }
        fmt = fmt.replace(RegExp.$1, mydate);
    }
    return fmt;
}
exports.getToday = getToday;
function getRandom(start, end) {
    let choice = end - start;
    return '0' + Math.floor(Math.random() * choice + start);
}
exports.getRandom = getRandom;
