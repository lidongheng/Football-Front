"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
const recentMatchSchema = new Schema({
    league: {
        type: String
    },
    match: {
        type: String
    },
    time: {
        type: String
    },
    weekday: {
        type: String
    },
    period: {
        type: String
    },
    place: {
        type: String
    }
});
exports.TeamSchema = new Schema({
    league: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    ChineseName: {
        type: String,
        required: true
    },
    style: {
        type: String
    },
    recentMatch: [recentMatchSchema]
});
exports.TeamModel = db_1.default.model("Teams", exports.TeamSchema);
