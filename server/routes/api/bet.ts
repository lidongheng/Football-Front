import { Router } from 'express';
import BetController from '../../controller/betController';
import passport from 'passport';

export const betRouter = Router();
const bet = new BetController();

// $route GET api/bet/test
// @desc 返回的请求的json数据
// @access public
betRouter.get('/test', (req, res) => {
    res.json({msg:"bet works"});
});

// $route POST api/bet
// @desc 返回的请求的json数据
// @access private
betRouter.post('/', passport.authenticate("jwt",{session:false}), (req, res) => {
    bet.create(req, res)
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);
        });
});
