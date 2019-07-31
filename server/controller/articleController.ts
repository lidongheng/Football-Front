import {Request, Response} from 'express';
import { ArticleModel } from '../models/Article';
import {Article} from "../interface/article";
import {TeamModel} from "../models/Team";
import {Validator} from "../validation/validator";

class ArticleController {
    public add (req: Request, res: Response) {
        const {errors, isValid } = Validator.articleInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        TeamModel.find({ChineseName: {$in: req.body.about}},function (err, teams) {
            if (err) {
                let errors = {about:"查找球队时出错!"};
                return res.status(400).json(errors);
            } else {
                if (teams.length===0) {
                    let errors = {about:"关联球队未找到或者未按格式写!"};
                    return res.status(400).json(errors);
                }
                let teamsId:string[] = [];
                teams.forEach(team => {
                    teamsId.push(team._id);
                });
                const newArticle:Article = {
                    user: req.user.id,
                    title: req.body.title,
                    content: req.body.content,
                    about: teamsId
                };
                // @ts-ignore
                const newArticleModel = new ArticleModel(newArticle);
                newArticleModel.save()
                    .then((docs: any) => {
                        return res.status(200).json({success:true});
                    })
                    .catch((err: any) => {
                        return res.status(400).json({errors:'插入失败!'});
                    })
            }
        });

    }

    public async getAll (req: Request, res: Response) {
        const article = await ArticleModel.find({}, "_id title label date").sort({date:-1});
        return res.status(200).json({article: article});
    }

    public getArticle (req: Request, res: Response) {
        ArticleModel.findById(req.params.id)
            .then(article => {
                return res.status(200).json({article: article});
            })
            .catch(err => {
                return res.status(400).json({err: err});
            })
    }
}

export default ArticleController;
