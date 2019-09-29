import { Router } from 'express';
import TeamController from '../../controller/teamController';

export const teamsRouter = Router();
const team = new TeamController();

// $route GET api/teams/test
// @desc 返回的请求的json数据
// @access public
teamsRouter.get('/test', (req, res) => {
    res.json({msg:"team works"});
});

// $route POST api/teams/
// @desc
// @access public
teamsRouter.post('/', (req, res) => {
    team.add(req, res);
});

// $route GET api/teams/
// @desc
// @access public
teamsRouter.get('/', (req, res) => {
    team.get(req, res);
});

// $route PUT api/teams/styles/
// @desc
// @access public
teamsRouter.put('/styles/', (req, res) => {
    team.updateStyle(req, res);
});

// $route GET api/teams/styles/
// @desc
// @access public
teamsRouter.get('/styles/:team/', (req, res) => {
    team.getTeamStyle(req, res);
});

// $route POST api/teams/match/
// @desc
// @access public
teamsRouter.post('/match/', (req, res) => {
    team.addMatch(req, res)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// $route DELETE api/teams/match/:id/
// @desc
// @access public
teamsRouter.delete('/match/:team/:id/', (req, res) => {
    team.deleteMatch(req, res)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// $route GET api/teams/bigSixMatch/
// @desc
// @access public
teamsRouter.get('/bigSixMatch/', (req, res) => {
    team.getBigSixRecentMatch(req, res);
});

// $route GET api/teams/focusMatch/
// @desc
// @access public
teamsRouter.get('/focusMatch/', (req, res) => {
    team.getFocusRecentMatch(req, res);
});
