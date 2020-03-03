"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//login && register
const express_1 = require("express");
const userController_1 = __importDefault(require("../../controller/userController"));
const passport_1 = __importDefault(require("passport"));
exports.usersRouter = express_1.Router();
const user = new userController_1.default();
// $route GET api/users/test
// @desc 返回的请求的json数据
// @access public
exports.usersRouter.get('/test', (req, res) => {
    res.json({ msg: "login works" });
});
// $route POST api/users/register
// @desc 返回的请求的json数据
// @access public
exports.usersRouter.post('/register', (req, res) => {
    user.register(req, res)
        .catch(err => {
        console.log(err);
    });
});
// $route POST api/users/login
// @desc 返回token jwt passport
// @access public
exports.usersRouter.post('/login', (req, res) => {
    user.login(req, res)
        .catch(err => {
        console.log(err);
    });
});
// $route GET api/users/current
// @desc return current user
// @access private
exports.usersRouter.get('/current', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    res.json(req.user);
});
// $route POST api/users/changePwd
// @desc 修改密码
// @access private
exports.usersRouter.post('/changePwd', passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    user.changePwd(req, res)
        .catch(err => {
        return res.status(500).json(err);
    });
});
