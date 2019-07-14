//login && register
import { Router } from 'express';
import UserModel from '../../models/Users';
import {NewUser} from '../../interface/newUser';
import bcrypt from 'bcrypt';

export const usersRouter = Router();

// $route GET api/users/test
// @desc 返回的请求的json数据
// @access public
usersRouter.get('/test', (req, res) => {
    res.json({msg:"login works"});
});

// $route POST api/users/register
// @desc 返回的请求的json数据
// @access public
usersRouter.post('/register', (req, res) => {
    // console.log(req.body);

    //查询数据库是否拥有邮箱
    UserModel.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(400).json({email:"邮箱已被注册"});
            } else {
                const newUser:NewUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                };
                // @ts-ignore
                const newUserModel = new UserModel(newUser);
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // Store hash in your password DB.
                        if (err) throw err;
                        newUser.password = hash;
                    });
                });
                newUserModel.save()
                    .then((user: any) => res.json(user))
                    .catch((err: any) => {
                        console.log(err);
                    })
            }
        })
});

