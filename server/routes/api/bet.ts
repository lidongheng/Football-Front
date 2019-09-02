import { Router } from 'express';
import BetController from '../../controller/betController';
import passport from 'passport';
import { checkFilter } from './filter/checkFilter'


export const betRouter = Router();
const bet = new BetController();

// $route GET api/bet/test
// @desc 返回的请求的json数据
// @access public
betRouter.get('/test', (req, res) => {
    res.json({msg:"bet works"});
});

// $route POST api/bets
// @desc 返回的请求的json数据
// @access private
betRouter.post('/', passport.authenticate("jwt",{session:false}), (req, res) => {
    bet.create(req, res)
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);
        });
});

// $route GET api/bets
// @desc 返回的请求的json数据
// @access public
betRouter.get('/', checkFilter, passport.authenticate("jwt",{session:false}), (req, res) => {
    bet.getSearchData(req, res)
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);
        })
});

// $route POST api/bets/addSummary/
// @desc 返回的请求的json数据
// @access public
betRouter.post('/addSummary/', (req, res) => {
    bet.addSummary(req, res)
        .catch(err => {
            console.log(err);
            res.status(500).json({message: '服务器内部出错'});
        })
});

// $route GET api/bets/:pageNow/
// @desc 返回的请求的json数据
// @access public
betRouter.get('/:pageNow/', passport.authenticate("jwt",{session:false}), (req, res) => {
    bet.getData(req, res)
        .catch(err => {
            console.log(err);
            res.status(500).json({message: '获取订单信息出错!'});
        })
});


