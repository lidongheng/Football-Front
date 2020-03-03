"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forward_1 = require("../models/forward");
class ForwardController {
    add(req, res) {
        const forward = {
            rounds: req.body.rounds,
            time: req.body.time,
            match: req.body.match,
            odds: req.body.odds,
            forward: req.body.forward
        };
        // @ts-ignore
        const newForwardModel = new forward_1.ForwardModel(forward);
        newForwardModel.save()
            .then((docs) => {
            res.status(200).json({ message: '添加成功！' });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({ message: '添加失败！' });
        });
    }
    get(req, res) {
        forward_1.ForwardModel.find().sort({ date: -1 }).limit(10)
            .then((forwards) => {
            res.status(200).json({ forwards: forwards });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({ message: '查询失败！' });
        });
    }
    delete(req, res) {
        forward_1.ForwardModel.findOneAndDelete(req.params._id)
            .then((docs) => {
            res.status(200).json({ message: '删除成功！' });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({ message: '删除失败！' });
        });
    }
}
exports.default = ForwardController;
