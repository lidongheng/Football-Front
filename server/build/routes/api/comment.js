"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = __importDefault(require("../../controller/commentController"));
const passport_1 = __importDefault(require("passport"));
exports.commentRouter = express_1.Router();
const comment = new commentController_1.default();
// $route GET api/comment
// @desc 返回的请求的json数据
// @access public
exports.commentRouter.get('/', (req, res) => {
    comment.getAll(req, res);
});
// $route GET api/comment/:pageNow/
// @desc 返回的请求的json数据
// @access public
exports.commentRouter.get('/:pageNow/', (req, res) => {
    comment.getData(req, res)
        .catch(err => {
        console.log(err);
        res.status(500).json({ message: '获取评论记录出错!' });
    });
});
// $route POST api/comment
// @desc 返回的请求的json数据
// @access private
exports.commentRouter.post('/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    comment.add(req, res);
});
// $route POST api/comment/like/:id/
// @desc 点赞接口
// @access private
exports.commentRouter.post('/like/:id/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    comment.like(req, res);
});
// $route POST api/comment/unlike/:id/
// @desc 取消点赞接口
// @access private
exports.commentRouter.post('/unlike/:id/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    comment.unlike(req, res);
});
// $route DELETE api/comment/:id/
// @desc 删除评论接口
// @access private
exports.commentRouter.delete('/:id/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    comment.delete(req, res);
});
