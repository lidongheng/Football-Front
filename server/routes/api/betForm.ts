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
// @access private
betFormRouter.post('/', passport.authenticate("jwt",{session:false}), (req, res) => {
    betForm.createOrEdit(req, res).catch(err => console.log(err));
});

// $route GET api/betForm/match
// @desc 返回的请求的json数据
// @access public
betFormRouter.get('/match/:pageNow/', (req, res) => {
    betForm.getList(req, res)
        .catch(err => {
            console.log(err);
            return res.status(500).json({error:'内部服务器出错!'});
        })
});

// $route GET api/betForm/:id/
// @desc 返回的请求的json数据
// @access public
betFormRouter.get('/:id/', (req, res) => {
    betForm.getDetail(req, res)
        .catch(err => {console.log(err)});
});

// $route DELETE api/betForm/:id/
// @desc 删除一条数据
// @access private
betFormRouter.delete('/:id/', passport.authenticate("jwt",{session:false}), (req, res) => {
    betForm.deleteOne(req, res);
});
