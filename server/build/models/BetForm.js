"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
db_1.default.set('useFindAndModify', false);
// @ts-ignore
const Schema = db_1.default.Schema;
exports.BetFormSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    league: {
        type: String,
        required: true
    },
    rounds: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    away: {
        type: String,
        required: true
    },
    matchTime: {
        type: String,
        required: true
    },
    isSingleMatch: {
        type: Number,
        required: true
    },
    analysis: {
        type: String,
        required: true
    },
    hostInjury: {
        type: String,
        required: true
    },
    awayInjury: {
        type: String,
        required: true
    },
    hostExpectLineup: {
        type: String,
        required: true
    },
    awayExpectLineup: {
        type: String,
        required: true
    },
    hostExpectBench: {
        type: String,
        required: true
    },
    awayExpectBench: {
        type: String,
        required: true
    },
    hostNews: {
        type: String,
        required: true
    },
    awayNews: {
        type: String,
        required: true
    },
    isDelete: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.BetFormModel = db_1.default.model("betForm", exports.BetFormSchema);
