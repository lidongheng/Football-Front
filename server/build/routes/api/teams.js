"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = __importDefault(require("../../controller/teamController"));
exports.teamsRouter = express_1.Router();
const team = new teamController_1.default();
// $route GET api/teams/test
// @desc 返回的请求的json数据
// @access public
exports.teamsRouter.get('/test', (req, res) => {
    res.json({ msg: "team works" });
});
// $route POST api/teams/
// @desc
// @access public
exports.teamsRouter.post('/', (req, res) => {
    team.add(req, res);
});
// $route GET api/teams/
// @desc
// @access public
exports.teamsRouter.get('/', (req, res) => {
    team.get(req, res);
});
// $route PUT api/teams/styles/
// @desc
// @access public
exports.teamsRouter.put('/styles/', (req, res) => {
    team.updateStyle(req, res);
});
// $route GET api/teams/styles/
// @desc
// @access public
exports.teamsRouter.get('/styles/:team/', (req, res) => {
    team.getTeamStyle(req, res);
});
// $route POST api/teams/match/
// @desc
// @access public
exports.teamsRouter.post('/match/', (req, res) => {
    team.addMatch(req, res)
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// $route DELETE api/teams/match/:id/
// @desc
// @access public
exports.teamsRouter.delete('/match/:team/:id/', (req, res) => {
    team.deleteMatch(req, res)
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// $route GET api/teams/bigSixMatch/
// @desc
// @access public
exports.teamsRouter.get('/bigSixMatch/', (req, res) => {
    team.getBigSixRecentMatch(req, res);
});
// $route GET api/teams/focusMatch/
// @desc
// @access public
exports.teamsRouter.get('/focusMatch/', (req, res) => {
    team.getFocusRecentMatch(req, res);
});
