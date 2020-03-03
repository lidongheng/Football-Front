"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../../controller/adminController"));
exports.adminRouter = express_1.Router();
const admin = new adminController_1.default();
// $route GET api/users/test
// @desc 返回的请求的json数据
// @access public
exports.adminRouter.get('/test', (req, res) => {
    res.json({ msg: "login works" });
});
// $route POST api/admin/register
// @desc 返回的请求的json数据
// @access public
exports.adminRouter.post('/register', (req, res) => {
    admin.register(req, res)
        .catch(err => {
        console.log(err);
    });
});
// $route POST api/admin/login
// @desc 返回token jwt passport
// @access public
exports.adminRouter.post('/login', (req, res) => {
    admin.login(req, res)
        .catch(err => {
        console.log(err);
    });
});
// $route POST api/admin/findPwd
// @desc 找回密码
// @access public
exports.adminRouter.post('/findPwd', (req, res) => {
    admin.findPwd(req, res);
});
// $route POST api/admin/changePwd
// @desc 修改密码
// @access private
exports.adminRouter.post('/changePwd', (req, res) => {
    admin.changePwd(req, res)
        .catch(err => {
        return res.status(500).json(err);
    });
});
// $route GET api/admin/
// @desc 找回密码
// @access public
exports.adminRouter.get('/', (req, res) => {
    admin.allUsers(req, res);
});
