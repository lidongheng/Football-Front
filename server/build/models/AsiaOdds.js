"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.AsiaOddsSchema = new Schema({
    match: {
        type: Schema.Types.ObjectId,
        ref: "betforms"
    },
    companyId: {
        type: Number,
        required: true
    },
    winOdd: {
        type: String,
        required: true
    },
    drawOdd: {
        type: String,
        required: true
    },
    loseOdd: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.AsiaOddsModel = db_1.default.model("AsiaOdds", exports.AsiaOddsSchema);
