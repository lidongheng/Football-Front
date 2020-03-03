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
const Users_1 = require("../models/Users");
const validator_1 = require("../validation/validator");
class UserController {
    async register(req, res) {
        console.log(req.body);
        const { errors, isValid } = validator_1.Validator.registerInput(req.body);
        if (!isValid) {
            return res.status(400).json({ errors: errors });
        }
        //查询数据库是否拥有邮箱
        const user = await Users_1.UserModel.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ email: "邮箱已被注册" });
            return;
        }
        const saltRounds = 10;
        req.body.password = await bcrypt_1.default.hash(req.body.password, saltRounds);
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        // @ts-ignore
        const newUserModel = new Users_1.UserModel(newUser);
        newUserModel.save((err, user) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            else {
                return res.status(200).json({ success: true });
            }
        });
    }
    async login(req, res) {
        const { errors, isValid } = validator_1.Validator.loginInput(req.body);
        if (!isValid) {
            return res.status(400).json({ errors: errors });
        }
        const user = await Users_1.UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ "message": "用户不存在" });
        }
        // 密码匹配
        // @ts-ignore
        const match = await bcrypt_1.default.compare(req.body.password, user.password);
        if (match) {
            // @ts-ignore
            const rule = { id: user.id, email: user.email };
            const token = await jwt.sign(rule, secret_1.default, { expiresIn: 2592000 });
            // @ts-ignore
            return res.status(200).json({ success: true, token: "Bearer " + token, email: user.email, userId: user._id, username: user.username });
        }
        else {
            return res.status(400).json({ "message": "密码错误" });
        }
    }
    async changePwd(req, res) {
        const saltRounds = 10;
        req.body.password = await bcrypt_1.default.hash(req.body.password, saltRounds);
        const user = await Users_1.UserModel.findOneAndUpdate({ email: req.body.email }, { $set: { password: req.body.password } }, { new: true });
        if (user) {
            res.status(200).json({ state: "suc", message: '密码修改成功！' });
        }
        else {
            res.status(400).json({ state: "failed", message: '密码修改失败！' });
        }
    }
}
exports.default = UserController;
