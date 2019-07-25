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
