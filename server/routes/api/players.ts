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

// $route DELETE api/players/:id/
// @desc 返回true
// @access public
playersRouter.delete('/:id/', (req, res) => {
    player.deletePlayer(req, res);
});

// $route PUT api/players/:id/
// @desc 返回true
// @access public
playersRouter.put('/:id/', (req, res) => {
    player.updatePlayer(req, res);
});

// $route GET api/players/team/:team/
// @desc 返回true
// @access public
playersRouter.get('/team/:team/', (req, res) => {
    player.getTeamPlayer(req, res);
});

// $route GET api/players/:pageNow/
// @desc 返回true
// @access public
playersRouter.get('/:pageNow/', (req, res) => {
    player.getPlayers(req, res)
        .catch(err => {
            res.status(500).json(err);
        })
});

// $route GET api/players/:id/
// @desc 返回true
// @access public
playersRouter.get('/:id/', (req, res) => {
    player.getPlayers(req, res)
        .catch(err => {
            res.status(500).json(err);
        })
});

// $route GET api/players/search/:player/:pageNow/
// @desc 返回true
// @access public
playersRouter.get('/search/:name/:pageNow/', (req, res) => {
    player.searchPlayer(req, res);
});
