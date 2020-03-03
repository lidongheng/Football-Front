"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articleController_1 = __importDefault(require("../../controller/articleController"));
const passport_1 = __importDefault(require("passport"));
exports.articlesRouter = express_1.Router();
const article = new articleController_1.default();
// $route GET api/articles/test
// @desc 返回的请求的json数据
// @access public
exports.articlesRouter.get('/test', (req, res) => {
    res.json({ msg: "article works" });
});
// $route POST api/articles/
// @desc 返回的请求的json数据
// @access private
exports.articlesRouter.post('/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    article.add(req, res);
});
// $route GET api/articles/
// @desc 返回的请求的json数据
// @access public
exports.articlesRouter.get('/', (req, res) => {
    article.getAll(req, res)
        .catch(err => {
        return res.status(400).json({ error: err });
    });
});
// $route GET api/articles/:id/
// @desc 返回的请求的json数据
// @access public
exports.articlesRouter.get('/:id/', (req, res) => {
    article.getArticle(req, res);
});
// $route DELETE api/articles/:id/
// @desc 删除文章
// @access private
exports.articlesRouter.delete('/:id/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    article.delete(req, res);
});
