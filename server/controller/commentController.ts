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

}

export default CommentController;
