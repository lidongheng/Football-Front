"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.TimelineSchema = new Schema({
    order: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    desc: {
        type: String
    }
});
exports.TimelineModel = db_1.default.model("Timelines", exports.TimelineSchema);
