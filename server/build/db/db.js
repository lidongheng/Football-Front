"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = __importDefault(require("../config/db"));
mongoose_1.default.Promise = global.Promise;
/**
 * 连接
 */
mongoose_1.default.connect(db_1.default);
/**
 * 连接成功
 */
mongoose_1.default.connection.on('connected', function () {
    console.log('MongoDB connected');
});
/**
 * 连接异常
 */
mongoose_1.default.connection.on('error', function (err) {
    console.log('MongoDB connection error: ' + err);
});
/**
 * 连接断开
 */
mongoose_1.default.connection.on('disconnected', function () {
    console.log('MongoDB disconnected');
});
exports.default = mongoose_1.default;
