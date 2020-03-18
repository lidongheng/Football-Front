"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.PlayerSchema = new Schema({
    league: {
        type: String
    },
    club: {
        type: String,
        required: true
    },
    clubEname: {
        type: String,
        required: true
    },
    player: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    nation: {
        type: String
    },
    position: {
        type: String,
        required: true
    },
    attr: {
        type: String,
        required: true
    },
    importance: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isNationalTeam: {
        type: String,
        default: '0'
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.PlayerModel = db_1.default.model("players", exports.PlayerSchema);
