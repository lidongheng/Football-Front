import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {UserSchema} from "../models/Users";
import {NewUser} from "../interface/newUser";
import bcrypt from "bcrypt";

const UserModel = mongoose.model("users", UserSchema);

class UserController {

    public register(req: Request, res: Response) {
        //查询数据库是否拥有邮箱
        UserModel.findOne({email: req.body.email})
            .then((user) => {
                if (user) {
                    res.status(400).json({email: "邮箱已被注册"});
                } else {
                    // 这里传个加密算法函数
                    const saltRounds = 10;
                    bcrypt.hash(req.body.password, saltRounds)
                        .then(hash => {
                            req.body.password = hash;
                            const newUser: NewUser = {
                                name: req.body.name,
                                email: req.body.email,
                                password: req.body.password
                            };
                            // @ts-ignore
                            const newUserModel = new UserModel(newUser);
                            newUserModel.save((user: any, err: any) => {
                                if (err) {
                                    res.send(err);
                                } else {
                                    res.json(user)
                                }
                            });
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            })
    }
    private jiami (password: string) {

    }
    public login(req: Request, res: Response) {
        const email = req.body.email;
        const password = req.body.password;
        UserModel.findOne({email})
            .then(user => {
                if(!user) {
                    res.status(404).json({"message": "用户不存在"});
                }

                // 密码匹配
                // @ts-ignore
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            res.json({"message": "登录成功！"});
                        } else {
                            res.status(400).json({"message": "密码错误"});
                        }
                    })
            })
    }
}

export default UserController;
