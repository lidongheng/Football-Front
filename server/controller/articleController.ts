import {Request, Response} from 'express';
import { ArticleModel } from '../models/Article';
import {Article} from "../interface/article";
import {Validator} from "../validation/validator";

class ArticleController {
    public async add (req: Request, res: Response) {
        const {errors, isValid } = Validator.articleInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        let teams = req.body.about.split(',');
        const newArticle:Article = {
            user: req.user.id,
            title: req.body.title,
            content: req.body.content,
            about: teams
        };
        if (req.body.id) {
            const article = await ArticleModel.findOne({_id: req.body.id});
            if (article) {
                // 文章已存在，执行更新方法
                const article = await ArticleModel.findOneAndUpdate({_id: req.body.id}, {$set: newArticle}, {new: true});
                if (article) {
                    return res.status(200).json({success: true, article_id: article._id})
                } else {
                    return res.status(408).json({message: '执行更新方法失败！'})
                }
            } else {
                return res.status(400).json({message: '找不到这篇文章！'})
            }
        }
        // @ts-ignore
        const newArticleModel = new ArticleModel(newArticle);
        newArticleModel.save()
            .then((docs: any) => {
                return res.status(200).json({success:true});
            })
            .catch((err: any) => {
                return res.status(400).json({errors:'插入失败!'});
            });

    }

    public async getAll (req: Request, res: Response) {
        const article = await ArticleModel.find({}, "_id title label date").sort({date:-1});
        return res.status(200).json({article: article});
    }

    public getArticle (req: Request, res: Response) {
        ArticleModel.findById(req.params.id)
            .then(article => {
                // @ts-ignore
                article.about.join('');
                return res.status(200).json({article: article});
            })
            .catch(err => {
                return res.status(400).json({err: err});
            })
    }
}

export default ArticleController;
