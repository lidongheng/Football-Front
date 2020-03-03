"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = __importDefault(require("../../controller/playerController"));
exports.playersRouter = express_1.Router();
const player = new playerController_1.default();
// $route GET api/players/test
// @desc 返回的请求的json数据
// @access public
exports.playersRouter.get('/test', (req, res) => {
    res.json({ msg: "player works" });
});
// $route POST api/players/
// @desc 返回true
// @access public
exports.playersRouter.post('/', (req, res) => {
    player.add(req, res);
});
// $route DELETE api/players/:id/
// @desc 返回true
// @access public
exports.playersRouter.delete('/:id/', (req, res) => {
    player.deletePlayer(req, res);
});
// $route PUT api/players/:id/
// @desc 返回true
// @access public
exports.playersRouter.put('/:id/', (req, res) => {
    player.updatePlayer(req, res);
});
// $route GET api/players/team/:team/
// @desc 返回true
// @access public
exports.playersRouter.get('/team/:team/', (req, res) => {
    player.getTeamPlayer(req, res);
});
// $route GET api/players/:pageNow/
// @desc 返回true
// @access public
exports.playersRouter.get('/:pageNow/', (req, res) => {
    player.getPlayers(req, res)
        .catch(err => {
        res.status(500).json(err);
    });
});
// $route GET api/players/:id/
// @desc 返回true
// @access public
exports.playersRouter.get('/:id/', (req, res) => {
    player.getPlayers(req, res)
        .catch(err => {
        res.status(500).json(err);
    });
});
// $route GET api/players/search/:player/:pageNow/
// @desc 返回true
// @access public
exports.playersRouter.get('/search/:name/:pageNow/', (req, res) => {
    player.searchPlayer(req, res);
});
