"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BetFilter_1 = require("../../../models/shared/BetFilter");
const message_1 = require("../../../models/shared/message");
exports.checkFilter = (req, res, next) => {
    const filters = new BetFilter_1.BetFilter(req.query);
    for (const filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(new message_1.APIError("query missing", "not all required queries supplied", 400));
        }
    }
    next();
};
