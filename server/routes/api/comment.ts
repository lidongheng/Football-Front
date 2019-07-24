import { Router } from 'express';
import CommentController from '../../controller/commentController';
import passport from 'passport';

export const commentRouter = Router();
const comment = new CommentController();

// $route GET api/comment
// @desc 返回的请求的json数据
// @access public
commentRouter.get('/', (req, res) => {
    comment.getAll(req, res);
});

// $route POST api/comment
// @desc 返回的请求的json数据
// @access private
commentRouter.post('/', passport.authenticate("jwt",{session:false}), (req, res) => {
    comment.add(req, res);
});

// $route POST api/comment/like/:id/
// @desc 点赞接口
// @access private
commentRouter.post('/like/:id/', passport.authenticate("jwt",{session:false}), (req, res) => {
    comment.like(req, res);
});

// $route POST api/comment/unlike/:id/
// @desc 取消点赞接口
// @access private
commentRouter.post('/unlike/:id/', passport.authenticate("jwt",{session:false}), (req, res) => {
    comment.unlike(req, res);
});