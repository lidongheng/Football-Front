import { Router } from 'express';
import PlayerController from '../../controller/playerController';

export const playersRouter = Router();
const player = new PlayerController();

// $route GET api/players/test
// @desc 返回的请求的json数据
// @access public
playersRouter.get('/test', (req, res) => {
    res.json({msg:"player works"});
});

// $route POST api/players/
// @desc 返回true
// @access public
playersRouter.post('/', (req, res) => {
    player.add(req, res);
});

// $route GET api/players/:team/
// @desc 返回true
// @access public
playersRouter.get('/:team/', (req, res) => {
    player.getTeamPlayer(req, res);
});
