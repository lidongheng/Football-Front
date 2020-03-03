"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BetFilter {
    constructor(data) {
        this.q = data.q;
        this.pageNow = data.pageNow ? data.pageNow : 1;
        this.pageSize = data.pageSize ? data.pageSize : 5;
    }
}
exports.BetFilter = BetFilter;
