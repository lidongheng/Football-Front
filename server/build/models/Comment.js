"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const Schema = db_1.default.Schema;
exports.CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    content: {
        type: String,
        required: true
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users"
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});
exports.CommentModel = db_1.default.model("comment", exports.CommentSchema);
