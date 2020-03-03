"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bet_1 = require("../models/Bet");
const validator_1 = require("../validation/validator");
const utils_1 = require("../utils/utils");
const BetFilter_1 = require("../models/shared/BetFilter");
class BetController {
    async create(req, res) {
        const { errors, isValid } = validator_1.Validator.betInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const serialNumber = '' + utils_1.getToday() + req.body.number + utils_1.getRandom(10, 100);
        const newBet = {
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
        const newBetModel = new Bet_1.BetModel(newBet);
        let bet = await newBetModel.save();
        bet.amount = parseFloat(bet.amount).toFixed(2);
        bet.totalProfit = (bet.amount * parseFloat(bet.profit)).toFixed(2);
        process.on('unhandledRejection', error => {
            console.error('unhandledRejection', error);
            process.exit(1); // To exit with a 'failure' code
        });
        return res.status(200).json({ success: true, bet: bet });
    }
    async getSearchData(req, res) {
        const filters = new BetFilter_1.BetFilter(req.query);
        const pageNow = filters.pageNow;
        const pageSize = Number(filters.pageSize);
        if (filters.q === '') {
            var rows = await Bet_1.BetModel.find({ user: req.user.id }).count();
        }
        else {
            var rows = await Bet_1.BetModel.find({ user: req.user.id, $or: [{ host: filters.q }, { away: filters.q }] }).count();
        }
        let pages = 0;
        if (rows % pageSize == 0) {
            pages = Math.floor(rows / pageSize);
        }
        else {
            pages = Math.floor(rows / pageSize) + 1;
        }
        // @ts-ignore
        const skipNum = (pageNow - 1) * pageSize;
        if (filters.q === '') {
            try {
                const bets = await Bet_1.BetModel.find({ user: req.user.id })
                    .skip(skipNum)
                    .sort({ date: -1 })
                    .limit(pageSize);
                res.status(200).json({ bets, pages, rows });
            }
            catch (error) {
                res.status(400).json({ noContentFound: "找不到任何订单信息" });
                //console.log(error);
                //res.status(400).json({error: error});
            }
        }
        else {
            Bet_1.BetModel.find({ user: req.user.id, $or: [{ host: filters.q }, { away: filters.q }] })
                .skip(skipNum)
                .sort({ date: -1 })
                .limit(pageSize)
                .then(bets => {
                res.status(200).json({ bets, pages, rows });
            })
                .catch(err => res.status(400).json({ noContentFound: "找不到任何订单信息" }));
        }
    }
    async getData(req, res) {
        const pageNow = req.params.pageNow;
        const rows = await Bet_1.BetModel.find({ user: req.user.id }).count();
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
            const bets = await Bet_1.BetModel.find({ user: req.user.id })
                .skip(skipNum)
                .sort({ date: -1 })
                .limit(pageSize);
            res.status(200).json({ bets, pages, rows });
        }
        catch (error) {
            res.status(400).json({ noContentFound: "找不到任何订单信息" });
        }
    }
    async addSummary(req, res) {
        console.log(req.body);
        const bet = await Bet_1.BetModel.findOneAndUpdate({ _id: req.body._id }, { $set: { summary: req.body.summary } }, { new: true });
        if (bet) {
            return res.status(200).json({ success: true });
        }
        else {
            return res.status(400).json({ success: false });
        }
    }
}
exports.default = BetController;
