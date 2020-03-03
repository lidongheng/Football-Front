"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const secret_1 = __importDefault(require("../config/secret"));
const Admin_1 = require("../models/Admin");
const nodemailer_1 = __importDefault(require("nodemailer"));
require('dotenv').config();
class AdminController {
    async register(req, res) {
        console.log(req.body);
        // const {errors, isValid } = Validator.registerInput(req.body);
        // if(!isValid){
        //     return res.status(400).json(errors);
        // }
        //查询数据库是否拥有邮箱
        const user = await Admin_1.AdminModel.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ email: "邮箱已被注册" });
            return;
        }
        const saltRounds = 10;
        req.body.password = await bcrypt_1.default.hash(req.body.password, saltRounds);
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            key: req.body.key,
            role: req.body.role,
            des: req.body.des
        };
        // @ts-ignore
        const newAdminModel = new Admin_1.AdminModel(newUser);
        newAdminModel.save((err, user) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            else {
                return res.status(200).json({ success: true, message: '注册成功' });
            }
        });
    }
    async login(req, res) {
        // const {errors, isValid } = Validator.loginInput(req.body);
        // if(!isValid){
        //    return res.status(400).json(errors);
        //}
        const autoLogin = req.body.autoLogin;
        const user = await Admin_1.AdminModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "用户不存在" });
        }
        // 密码匹配
        // @ts-ignore
        const match = await bcrypt_1.default.compare(req.body.password, user.password);
        if (match) {
            // @ts-ignore
            const rule = { id: user.id, email: user.email, username: user.username, avatar: user.avatar, key: user.key };
            const token = await jwt.sign(rule, secret_1.default, { expiresIn: autoLogin ? 604800 : 3600 });
            // @ts-ignore
            return res.status(200).json({ success: true, token: "Bearer " + token, email: user.email, userId: user._id });
        }
        else {
            return res.status(400).json({ message: "密码错误" });
        }
    }
    findPwd(req, res) {
        Admin_1.AdminModel.findOne({ email: req.body.email })
            .then(user => {
            if (!user) {
                res.status(400).json({ state: 'failed', message: '该用户不存在' });
            }
            else {
                let transporter = nodemailer_1.default.createTransport({
                    service: 'qq',
                    secure: true,
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                    }
                });
                let mailOptions = {
                    from: process.env.EMAIL,
                    to: req.body.email,
                    subject: "找回密码",
                    // @ts-ignore
                    text: `您的用户名:${user.username},密码:${user.password}`
                };
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        res.status(400).json({ state: "failed", message: err });
                    }
                    else {
                        res.status(200).json({ state: "suc", message: `密码已发送至您的邮箱${req.body.email}` });
                    }
                });
            }
        });
    }
    async changePwd(req, res) {
        const saltRounds = 10;
        req.body.password = await bcrypt_1.default.hash(req.body.password, saltRounds);
        const user = await Admin_1.AdminModel.findOneAndUpdate({ email: req.body.email }, { $set: { password: req.body.password } }, { new: true });
        if (user) {
            res.status(200).json({ state: "suc", message: '密码修改成功！' });
        }
        else {
            res.status(400).json({ state: "failed", message: '密码修改失败！' });
        }
    }
    allUsers(req, res) {
        Admin_1.AdminModel.find().sort({ date: 1 })
            .then(users => {
            res.status(200).json({ state: "suc", message: '密码修改成功！', users: users });
        })
            .catch(err => {
            res.status(400).json({ state: "failed", message: '请求失败！' });
        });
    }
}
exports.default = AdminController;
