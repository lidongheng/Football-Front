import {Request, Response} from 'express';
import { BetFormModel } from '../models/BetForm';
import {NewBetForm} from "../interface/newBetForm";


class BetFormController {
    public create(req: Request, res: Response) {
        const newBetForm:NewBetForm = {
            user: req.user.id,
            league: req.body.league,
            rounds: req.body.rounds,
            host: req.body.host,
            away: req.body.away,
            matchTime: req.body.matchTime,
            isSingleMatch: req.body.isSingleMatch,
            EuroCompanyId: req.body.EuroCompanyId,
            AsiaCompanyId: req.body.AsiaCompanyId,
            Euroodd: req.body.Euroodd,
            Asiaodd: req.body.Asiaodd,
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
        // @ts-ignore
        const newBetFormModel = new BetFormModel(newBetForm);
        newBetFormModel.save((err: any, betForm: any) => {
            if (err) {
                return res.status(400).json({error:err});
            } else {
                return res.status(200).json({success:true});
            }
        });

    }
}

export default BetFormController;
