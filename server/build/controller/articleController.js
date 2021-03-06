"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Article_1 = require("../models/Article");
const validator_1 = require("../validation/validator");
class ArticleController {
    async add(req, res) {
        const { errors, isValid } = validator_1.Validator.articleInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        let teams = req.body.about.split(',');
        const newArticle = {
            user: req.user.id,
            title: req.body.title,
            content: req.body.content,
            about: teams
        };
        if (req.body.id) {
            const article = await Article_1.ArticleModel.findOne({ _id: req.body.id });
            if (article) {
                // 文章已存在，执行更新方法
                const article = await Article_1.ArticleModel.findOneAndUpdate({ _id: req.body.id }, { $set: newArticle }, { new: true });
                if (article) {
                    return res.status(200).json({ success: true, article_id: article._id });
                }
                else {
                    return res.status(408).json({ message: '执行更新方法失败！' });
                }
            }
            else {
                return res.status(400).json({ message: '找不到这篇文章！' });
            }
        }
        // @ts-ignore
        const newArticleModel = new Article_1.ArticleModel(newArticle);
        newArticleModel.save()
            .then((docs) => {
            return res.status(200).json({ success: true });
        })
            .catch((err) => {
            return res.status(400).json({ errors: '插入失败!' });
        });
    }
    async getAll(req, res) {
        const article = await Article_1.ArticleModel.find({}, "_id title label date").sort({ date: -1 });
        return res.status(200).json({ article: article });
    }
    getArticle(req, res) {
        Article_1.ArticleModel.findById(req.params.id).populate('user', 'username email _id')
            .then(article => {
            // @ts-ignore
            article.about.join('');
            return res.status(200).json({ article: article });
        })
            .catch(err => {
            return res.status(400).json({ err: err });
        });
    }
    delete(req, res) {
        Article_1.ArticleModel.findOneAndDelete({ _id: req.params.id })
            .then(article => {
            return res.status(200).json({ success: true });
        })
            .catch(err => {
            return res.status(400).json({ err: err });
        });
    }
}
exports.default = ArticleController;
