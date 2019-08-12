import { Router } from 'express';
import AdminController from '../../controller/adminController';
import passport from 'passport';


export const adminRouter = Router();
const admin = new AdminController();

// $route GET api/users/test
// @desc 返回的请求的json数据
// @access public
adminRouter.get('/test', (req, res) => {
    res.json({msg:"login works"});
});

// $route POST api/admin/register
// @desc 返回的请求的json数据
// @access public
adminRouter.post('/register', (req, res) => {
    admin.register(req,res)
        .catch(err => {
            console.log(err);
        });
});

// $route POST api/admin/login
// @desc 返回token jwt passport
// @access public
adminRouter.post('/login', (req, res) => {
    admin.login(req, res)
        .catch(err => {
            console.log(err);
        })
});

// $route POST api/admin/findPwd
// @desc 找回密码
// @access public
adminRouter.post('/findPwd', (req, res) => {
    admin.findPwd(req, res);
});

// $route POST api/admin/changePwd
// @desc 修改密码
// @access private
adminRouter.post('/changePwd', passport.authenticate("jwt",{session:false}), (req, res) => {
    admin.changePwd(req, res)
        .catch(err => {
            return res.status(500).json(err);
        })
});

// $route GET api/admin/
// @desc 找回密码
// @access public
adminRouter.get('/', (req, res) => {
    admin.allUsers(req, res);
});
