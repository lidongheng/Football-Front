"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
db_1.default.set('useFindAndModify', false);
// @ts-ignore
const Schema = db_1.default.Schema;
exports.BetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    serialNumber: {
        type: String,
        required: true
    },
    league: {
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
    betTeam: {
        type: String,
        required: true
    },
    handicap: {
        type: String,
        required: true
    },
    profit: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    totalProfit: {
        type: Number,
        required: true
    },
    summary: {
        type: String,
        default: ""
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
exports.BetModel = db_1.default.model("bet", exports.BetSchema);
