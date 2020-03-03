"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.ForwardSchema = new Schema({
    rounds: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    match: {
        type: String,
        required: true
    },
    odds: {
        type: String,
        required: true
    },
    forward: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.ForwardModel = db_1.default.model("forwards", exports.ForwardSchema);
