"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const betController_1 = __importDefault(require("../../controller/betController"));
const passport_1 = __importDefault(require("passport"));
const checkFilter_1 = require("./filter/checkFilter");
exports.betRouter = express_1.Router();
const bet = new betController_1.default();
// $route GET api/bet/test
// @desc 返回的请求的json数据
// @access public
exports.betRouter.get('/test', (req, res) => {
    res.json({ msg: "bet works" });
});
// $route POST api/bets
// @desc 返回的请求的json数据
// @access private
exports.betRouter.post('/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    bet.create(req, res)
        .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    });
});
// $route GET api/bets
// @desc 返回的请求的json数据
// @access public
exports.betRouter.get('/', checkFilter_1.checkFilter, passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    bet.getSearchData(req, res)
        .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    });
});
// $route POST api/bets/addSummary/
// @desc 返回的请求的json数据
// @access public
exports.betRouter.post('/addSummary/', (req, res) => {
    bet.addSummary(req, res)
        .catch(err => {
        console.log(err);
        res.status(500).json({ message: '服务器内部出错' });
    });
});
// $route GET api/bets/:pageNow/
// @desc 返回的请求的json数据
// @access public
exports.betRouter.get('/:pageNow/', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    bet.getData(req, res)
        .catch(err => {
        console.log(err);
        res.status(500).json({ message: '获取订单信息出错!' });
    });
});
