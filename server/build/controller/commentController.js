"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_1 = require("../models/Comment");
const validator_1 = require("../validation/validator");
class CommentController {
    add(req, res) {
        const { errors, isValid } = validator_1.Validator.commentInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        console.log(req.body.content);
        const newComment = {
            user: req.user.id,
            content: req.body.content
        };
        console.log(req.body.content);
        // @ts-ignore
        const newCommentModel = new Comment_1.CommentModel(newComment);
        newCommentModel.save((err, comment) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            else {
                return res.status(200).json({ comment });
            }
        });
    }
    getAll(req, res) {
        Comment_1.CommentModel.find()
            .sort({ date: -1 })
            .then(contents => {
            res.status(200).json(contents);
        })
            .catch(err => res.status(404).json({ nocontentfound: "找不到任何评论信息" }));
    }
    async getData(req, res) {
        const pageNow = req.params.pageNow;
        const rows = await Comment_1.CommentModel.find().count();
        const pageSize = 10;
        let pages = 0;
        if (rows % pageSize == 0) {
            pages = rows / pageSize;
        }
        else {
            pages = rows / pageSize + 1;
        }
        const skipNum = (pageNow - 1) * pageSize;
        try {
            // const contents = await CommentModel.find().populate('user','username email _id')
            const contents = await Comment_1.CommentModel.find()
                .skip(skipNum)
                .sort({ date: -1 })
                .limit(pageSize);
            res.status(200).json({ contents, pages, rows });
        }
        catch (error) {
            res.status(400).json({ noContentFound: "找不到任何评论信息" });
        }
    }
    like(req, res) {
        Comment_1.CommentModel.findById(req.params.id)
            .then(comment => {
            // @ts-ignore
            if (comment.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                return res.status(400).json({ message: "你已点过赞" });
            }
            // @ts-ignore
            comment.likes.unshift({ user: req.user.id });
            // @ts-ignore
            comment.save()
                .then(comment => {
                res.status(200).json(comment);
            });
        })
            .catch(err => res.status(404).json({ message: "点赞错误" }));
    }
    unlike(req, res) {
        Comment_1.CommentModel.findById(req.params.id)
            .then(comment => {
            // @ts-ignore
            if (comment.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
                return res.status(400).json({ message: "你还没有点过赞" });
            }
            // @ts-ignore
            const removeIndex = comment.likes.map(like => like.user.toString()).indexOf(req.user.id);
            // @ts-ignore
            comment.likes.splice(removeIndex, 1);
            // @ts-ignore
            comment.save()
                .then(comment => {
                res.status(200).json(comment);
            });
        })
            .catch(err => res.status(404).json({ message: "取消点赞错误" }));
    }
    delete(req, res) {
        Comment_1.CommentModel.findById(req.params.id)
            .then(comment => {
            // @ts-ignore
            if (comment.user.toString() !== req.user.id) {
                return res.status(400).json({ message: "用户非法操作！" });
            }
            // @ts-ignore
            comment.remove().then(() => res.json({ success: true }));
        })
            .catch(err => {
            res.status(400).json({ message: "该评论信息已被删除！" });
        });
    }
}
exports.default = CommentController;
