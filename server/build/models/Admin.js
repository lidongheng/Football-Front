"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.AdminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    des: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    key: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    autoLogin: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.AdminModel = db_1.default.model("admins", exports.AdminSchema);
