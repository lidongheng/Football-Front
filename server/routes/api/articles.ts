import { Router } from 'express';
import ArticleController from '../../controller/articleController';
import passport from 'passport';

export const articlesRouter = Router();
const article = new ArticleController();

// $route GET api/articles/test
// @desc 返回的请求的json数据
// @access public
articlesRouter.get('/test', (req, res) => {
    res.json({msg:"article works"});
});

// $route POST api/articles/
// @desc 返回的请求的json数据
// @access private
articlesRouter.post('/', passport.authenticate("jwt",{session:false}), (req, res) => {
    article.add(req, res);
});

// $route GET api/articles/
// @desc 返回的请求的json数据
// @access public
articlesRouter.get('/', (req, res) => {
    article.getAll(req, res)
        .catch(err => {
            return res.status(400).json({error:err});
        })
});

// $route GET api/articles/:id/
// @desc 返回的请求的json数据
// @access public
articlesRouter.get('/:id/', (req, res) => {
    article.getArticle(req, res);
});

// $route DELETE api/articles/:id/
// @desc 删除文章
// @access private
articlesRouter.delete('/:id/', passport.authenticate("jwt",{session:false}), (req, res) => {
    article.delete(req, res);
});


