import {Request, Response} from 'express';
import { Comment } from "../interface/comment";
import { CommentModel } from '../models/Comment';
import { Validator } from '../validation/validator';

class CommentController {
    public add (req: Request, res: Response) {
        const {errors, isValid } = Validator.commentInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        console.log(req.body.content);
        const newComment:Comment = {
            user:req.user.id,
            content: req.body.content
        };
        console.log(req.body.content);
        // @ts-ignore
        const newCommentModel = new CommentModel(newComment);
        newCommentModel.save((err: any, comment: any) => {
            if (err) {
                return res.status(400).json({error:err});
            } else {
                return res.status(200).json({comment});
            }
        })
    }

    public getAll (req: Request, res: Response) {
        CommentModel.find()
            .sort({date: -1})
            .then(contents => {
                res.status(200).json(contents)})
            .catch(err => res.status(404).json({nocontentfound: "找不到任何评论信息"}))
    }

    public async getData (req: Request, res: Response) {
        const pageNow = req.params.pageNow;
        const rows = await CommentModel.find().count();
        const pageSize = 5;
        let pages = 0;
        if (rows % pageSize==0) {
            pages = rows/pageSize;
        } else {
            pages = rows/pageSize+1;
        }
        const skipNum = (pageNow-1)*pageSize;
        try {
            const contents = await CommentModel.find()
                .skip(skipNum)
                .sort({date: -1})
                .limit(pageSize);
            res.status(200).json({contents, pages, rows});
        } catch (error) {
            res.status(404).json({noContentFound: "找不到任何评论信息"});
        }
    }

    public like (req: Request, res: Response) {
        CommentModel.findById(req.params.id)
            .then(comment => {
                // @ts-ignore
                if (comment.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                    return res.status(400).json({message:"你已点过赞"})
                }
                // @ts-ignore
                comment.likes.unshift({user: req.user.id})
                // @ts-ignore
                comment.save()
                    .then(comment => {
                        res.status(200).json(comment)
                    })
            })
            .catch(err => res.status(404).json({message:"点赞错误"}))
    }

    public unlike (req: Request, res: Response) {
        CommentModel.findById(req.params.id)
            .then(comment => {
                // @ts-ignore
                if (comment.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
                    return res.status(400).json({message:"你还没有点过赞"})
                }
                // @ts-ignore
                const removeIndex = comment.likes.map(like => like.user.toString()).indexOf(req.user.id)
                // @ts-ignore
                comment.likes.splice(removeIndex, 1)
                // @ts-ignore
                comment.save()
                    .then(comment => {
                        res.status(200).json(comment)
                    })
            })
            .catch(err => res.status(404).json({message:"取消点赞错误"}))
    }

    public delete (req: Request, res: Response) {
        CommentModel.findById(req.params.id)
            .then(comment => {
                // @ts-ignore
                if(comment.user.toString() !== req.user.id){
                    return res.status(401).json({notAuthorized:"用户非法操作!"})
                }
                // @ts-ignore
                comment.remove().then(() => res.json({success:true}))
            })
            .catch(err => {
                res.status(404).json({commentNotFound:"没有该评论信息"})
            })
    }

}

export default CommentController;
