import {Request, Response} from 'express';
import {ForwardModel} from "../models/forward";
import {Forward} from "../interface/forward";

class ForwardController {
    public add (req: Request, res: Response) {
        const forward:Forward = {
            rounds: req.body.rounds,
            time: req.body.time,
            match: req.body.match,
            odds: req.body.odds,
            forward: req.body.forward
        };
        // @ts-ignore
        const newForwardModel = new ForwardModel(forward);
        newForwardModel.save()
            .then((docs:any) => {
                res.status(200).json({message: '添加成功！'});
            })
            .catch((err:any) => {
                console.log(err);
                res.status(400).json({message: '添加失败！'});
            })
    }

    public get(req: Request, res: Response) {
        ForwardModel.find().sort({date: -1}).limit(10)
            .then((forwards:any) => {
                res.status(200).json({forwards: forwards});
            })
            .catch((err:any) => {
                console.log(err);
                res.status(400).json({message: '查询失败！'});
            })
    }

    public delete (req: Request, res: Response) {
        ForwardModel.findOneAndDelete(req.params._id)
            .then((docs:any) => {
                res.status(200).json({message: '删除成功！'});
            })
            .catch((err:any) => {
                console.log(err);
                res.status(400).json({message: '删除失败！'});
            })
    }
}

export default ForwardController
