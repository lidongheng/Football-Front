import {RequestHandler} from "express";
import { BetFilter } from '../../../models/shared/BetFilter'
import {APIError} from "../../../models/shared/message";

export const checkFilter: RequestHandler = (req, res, next) => {
    const filters = new BetFilter(req.query);
    for (const filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(new APIError("query missing", "not all required queries supplied", 400));
        }
    }
    next();
}
