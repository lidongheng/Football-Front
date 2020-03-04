"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.ForecastSchema = new Schema({
    team: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    percent: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
});
exports.ForecastModel = db_1.default.model("forecast", exports.ForecastSchema);
