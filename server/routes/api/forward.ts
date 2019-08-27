import { Router } from 'express';
import ForwardController from '../../controller/forwardController'

export const forwardRouter = Router();
const forward = new ForwardController();

// $route POST api/forwards/
// @desc 返回的请求的json数据
// @access public
forwardRouter.post('/', (req, res) => {
    forward.add(req, res);
});

// $route GET api/forwards/
// @desc 返回的请求的json数据
// @access public
forwardRouter.get('/', (req, res) => {
    forward.get(req, res);
});

// $route DELETE api/forwards/:id/
// @desc 返回的请求的json数据
// @access public
forwardRouter.delete('/:id/', (req, res) => {
    forward.delete(req, res);
});
