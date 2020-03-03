"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const betFormController_1 = __importDefault(require("../../controller/betFormController"));
const passport_1 = __importDefault(require("passport"));
exports.betFormRouter = express_1.Router();
const betForm = new betFormController_1.default();
// $route GET api/betForm/test
// @desc 返回的请求的json数据
// @access public
exports.betFormRouter.get('/test', (req, res) => {
    res.json({ msg: "betform works" });
});
// $route GET api/betForm
// @desc 返回的请求的json数据
// @access private
exports.betFormRouter.get('/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    console.log('userid: ' + req.user.id);
    console.log('body:' + req.body);
});
// $route POST api/betForm
// @desc 返回的请求的json数据
// @access private
exports.betFormRouter.post('/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    betForm.createOrEdit(req, res).catch(err => console.log(err));
});
// $route GET api/betForm/match
// @desc 返回的请求的json数据
// @access public
exports.betFormRouter.get('/match/:pageNow/', (req, res) => {
    betForm.getList(req, res)
        .catch(err => {
        console.log(err);
        return res.status(500).json({ error: '内部服务器出错!' });
    });
});
// $route GET api/betForm/:id/
// @desc 返回的请求的json数据
// @access public
exports.betFormRouter.get('/:id/', (req, res) => {
    betForm.getDetail(req, res)
        .catch(err => { console.log(err); });
});
// $route DELETE api/betForm/:id/
// @desc 删除一条数据
// @access private
exports.betFormRouter.delete('/:id/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    betForm.deleteOne(req, res);
});
