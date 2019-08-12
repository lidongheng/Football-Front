import {Request, Response} from 'express';
import { BetModel } from '../models/Bet';
import {Bet} from "../interface/bet";
import {Validator} from "../validation/validator";
import {getToday, getRandom } from "../utils/utils";

class BetController {
    public async create (req: Request, res: Response) {
        const {errors, isValid } = Validator.betInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        const serialNumber = '' + getToday() + req.body.number + getRandom(10, 100);
        const newBet:Bet = {
            user: req.user.id,
            serialNumber: serialNumber,
            league: req.body.league,
            host: req.body.host,
            away: req.body.away,
            handicap: req.body.handicap,
            profit: req.body.profit,
            amount: req.body.amount
        };
        // @ts-ignore
        const newBetModel = new BetModel(newBet);
        const bet = await newBetModel.save();
        process.on('unhandledRejection', error => {
            console.error('unhandledRejection', error);
            process.exit(1) // To exit with a 'failure' code
        });
        return res.status(200).json({success:true, bet: bet});
    }
}

export default BetController
