import {Request, Response} from 'express';
import { BetModel } from '../models/Bet';
import {Bet} from "../interface/bet";
import {Validator} from "../validation/validator";
import {getToday, getRandom } from "../utils/utils";
import {BetFilter} from "../models/shared/BetFilter";

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
            betTeam: req.body.betTeam,
            handicap: req.body.handicap,
            profit: req.body.profit,
            amount: parseFloat(req.body.amount).toFixed(2),
            totalProfit: (req.body.amount * req.body.profit).toFixed(2)
        };
        // @ts-ignore
        const newBetModel = new BetModel(newBet);
        let bet = await newBetModel.save();
        bet.amount = parseFloat(bet.amount).toFixed(2);
        bet.totalProfit = (bet.amount * parseFloat(bet.profit)).toFixed(2);
        process.on('unhandledRejection', error => {
            console.error('unhandledRejection', error);
            process.exit(1) // To exit with a 'failure' code
        });
        return res.status(200).json({success:true, bet: bet});
    }

    public async getSearchData (req: Request, res: Response) {
        const filters = new BetFilter(req.query);
        const pageNow = filters.pageNow;
        const rows = await BetModel.find({ $or: [{host: filters.q}, {away: filters.q}] }).count();
        const pageSize = 10;
        let pages = 0;
        if (rows % pageSize==0) {
            pages = rows/pageSize;
        } else {
            pages = rows/pageSize+1;
        }
        // @ts-ignore
        const skipNum = (pageNow-1)*pageSize;
        BetModel.find({ $or: [{host: filters.q}, {away: filters.q}] })
            .skip(skipNum)
            .sort({date: -1})
            .limit(pageSize)
            .then(bets => {
                res.status(200).json({bets, pages, rows})})
            .catch(err => res.status(400).json({noContentFound: "找不到任何订单信息"}))
    }

    public async getData (req: Request, res: Response) {
        const pageNow = req.params.pageNow;
        const rows = await BetModel.find().count();
        const pageSize = 10;
        let pages = 0;
        if (rows % pageSize==0) {
            pages = rows/pageSize;
        } else {
            pages = rows/pageSize+1;
        }
        const skipNum = (pageNow-1)*pageSize;
        try {
            const bets = await BetModel.find()
                .skip(skipNum)
                .sort({date: -1})
                .limit(pageSize);
            res.status(200).json({bets, pages, rows});
        } catch (error) {
            res.status(400).json({noContentFound: "找不到任何订单信息"});
        }
    }

    public async addSummary (req: Request, res: Response) {
        console.log(req.body);
        const bet = await BetModel.findOneAndUpdate({_id:req.body._id}, {$set: {summary:req.body.summary}}, {new: true});
        if (bet) {
            return res.status(200).json({success: true});
        } else {
            return res.status(400).json({success: false});
        }
    }
}

export default BetController
