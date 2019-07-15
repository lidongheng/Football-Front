//login && register
import { Router } from 'express';
import UserController from '../../controller/userController';
import passport from 'passport';


export const usersRouter = Router();
const user = new UserController();

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
    user.register(req,res)
        .catch(err => {
            console.log(err);
        });
});

// $route POST api/users/register
// @desc 返回token jwt passport
// @access public
usersRouter.post('/login', (req, res) => {
    user.login(req, res)
        .catch(err => {
            console.log(err);
        })
});

// $route GET api/users/current
// @desc return current user
// @access private
usersRouter.get('/current', passport.authenticate("jwt",{session:false}),(req, res) => {
    res.json(req.user);
});
