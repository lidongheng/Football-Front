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
