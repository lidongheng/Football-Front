import {Request, Response} from 'express';
import { BetFormModel } from '../models/BetForm';
import {BetForm} from "../interface/betForm";

class BetFormController {
    public async createOrEdit(req: Request, res: Response) {
        console.log(req)
        const newBetForm:BetForm = {
            user: req.user.id,
            league: req.body.league,
            rounds: req.body.rounds,
            host: req.body.host,
            away: req.body.away,
            matchTime: req.body.matchTime,
            isSingleMatch: req.body.isSingleMatch,
            analysis: req.body.analysis,
            hostInjury: req.body.hostInjury,
            awayInjury: req.body.awayInjury,
            hostExpectLineup: req.body.hostExpectLineup,
            hostExpectBench: req.body.hostExpectBench,
            awayExpectLineup: req.body.awayExpectLineup,
            awayExpectBench: req.body.awayExpectBench,
            hostNews: req.body.hostNews,
            awayNews: req.body.awayNews
        };
        if(req.body.id){
            const form = await BetFormModel.findOne({_id: req.body.id})
            if(form){
                // 原有比赛存在，执行更新方法
                const form = await BetFormModel.findOneAndUpdate({_id: req.body.id}, {$set: newBetForm}, {new: true})
                if (form) {
                    return res.status(200).json({success: true, matchId: req.body.id})
                } else {
                    return res.status(408).json({message: '执行更新方法失败！'})
                }
            } else {
                return res.status(400).json({message: '找不到该场比赛！'})
            }
        }

        // @ts-ignore
        const newBetFormModel = new BetFormModel(newBetForm);
        const match = await newBetFormModel.save();
        process.on('unhandledRejection', error => {
            console.error('unhandledRejection', error);
            process.exit(1) // To exit with a 'failure' code
        });
        return res.status(200).json({success:true, matchId: match._id});


    }

    public async getList (req: Request, res: Response) {
        const match = await BetFormModel.find({}, "_id host away date").populate('user','username _id').exec();
        return res.status(200).json({match: match});
    }

    public async getDetail (req: Request, res: Response) {
        const form = await BetFormModel.findById(req.params.id);
        return res.status(200).json({form});
    }
}

export default BetFormController;
