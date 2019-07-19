import { Router } from 'express';
import BetFormController from '../../controller/betFormController';
import passport from 'passport';

export const betFormRouter = Router();
const betForm = new BetFormController();

// $route GET api/betForm/test
// @desc 返回的请求的json数据
// @access public
betFormRouter.get('/test', (req, res) => {
    res.json({msg:"betform works"});
});

// $route GET api/betForm
// @desc 返回的请求的json数据
// @access private
betFormRouter.get('/', passport.authenticate("jwt",{session:false}), (req, res) => {
    console.log('userid: ' + req.user.id);
    console.log('body:' + req.body);
});

// $route POST api/betForm
// @desc 返回的请求的json数据
// @access public
betFormRouter.post('/', passport.authenticate("jwt",{session:false}), (req, res) => {
    betForm.create(req, res);
});
