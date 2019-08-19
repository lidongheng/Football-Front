import { Router } from 'express';
import TimelineController from '../../controller/timelineController';

export const timelineRouter = Router();
const timeline = new TimelineController();

// $route GET api/timeline/test
// @desc 返回的请求的json数据
// @access public
timelineRouter.get('/test', (req, res) => {
    res.json({msg:"team works"});
});

// $route POST api/timeline/
// @desc
// @access public
timelineRouter.post('/', (req, res) => {
    timeline.add(req, res);
});

// $route GET api/timeline/
// @desc
// @access public
timelineRouter.get('/', (req, res) => {
    timeline.get(req, res)
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);
        })
});
