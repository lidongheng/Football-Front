"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.ArticleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: "资讯"
    },
    about: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.ArticleModel = db_1.default.model("article", exports.ArticleSchema);
