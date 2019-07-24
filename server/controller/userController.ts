import {Request, Response} from 'express';
import {User} from "../interface/user";
import bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
import SecretOrKey from '../config/secret';
import { UserModel } from '../models/Users';
import { Validator } from '../validation/validator';


class UserController {

    public async register(req: Request, res: Response) {
        console.log(req.body);
        const {errors, isValid } = Validator.registerInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        //查询数据库是否拥有邮箱
        const user = await UserModel.findOne({email: req.body.email});
        if (user) {
            res.status(400).json({email: "邮箱已被注册"});
            return ;
        }
        const saltRounds = 10;
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        const newUser: User = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        // @ts-ignore
        const newUserModel = new UserModel(newUser);
        newUserModel.save((err: any, user: any) => {
            if (err) {
                return res.status(400).json({error:err});
            } else {
               return res.status(200).json({success:true});
            }
        });
    }
    public async login(req: Request, res: Response) {
        const {errors, isValid } = Validator.loginInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        const user = await UserModel.findOne({email:req.body.email})
        if(!user) {
            return res.status(404).json({"message": "用户不存在"});
        }
        // 密码匹配
        // @ts-ignore
        const match = await bcrypt.compare(req.body.password, user.password)
        if(match) {
            // @ts-ignore
            const rule = {id:user.id,email:user.email};
            const token = await jwt.sign(rule,SecretOrKey,{expiresIn:60});
            // @ts-ignore
            return res.status(200).json({success:true,token:"Bearer " + token,email:user.email,userId:user._id});
        } else {
            return res.status(400).json({"message": "密码错误"});
        }
    }
}

export default UserController;
