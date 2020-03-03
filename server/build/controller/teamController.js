"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = require("../models/Team");
class TeamController {
    add(req, res) {
        const newTeam = {
            league: req.body.league,
            club: req.body.club,
            ChineseName: req.body.ChineseName
        };
        // @ts-ignore
        const newTeamModel = new Team_1.TeamModel(newTeam);
        newTeamModel.save((err, team) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            else {
                return res.status(200).json({ success: true });
            }
        });
    }
    get(req, res) {
        Team_1.TeamModel.find()
            .then(teams => {
            return res.status(200).json({ teams: teams });
        })
            .catch(err => {
            console.log(err);
            return res.status(400).json({ message: 'error' });
        });
    }
    updateStyle(req, res) {
        const style = req.body.style;
        const club = req.body.club;
        Team_1.TeamModel.updateOne({ club: club }, { $set: { style: style } })
            .then(club => {
            if (club.nModified === 0) {
                return res.status(400).json({ message: 'not this club!' });
            }
            return res.status(200).json({ success: true, message: "修改成功！" });
        })
            .catch(err => {
            console.log(err);
            return res.status(400).json({ message: 'PUT error!' });
        });
    }
    getTeamStyle(req, res) {
        const team = req.params.team;
        Team_1.TeamModel.findOne({ club: team })
            .then(team => {
            return res.status(200).json({ team: team });
        })
            .catch(err => {
            console.log(err);
            return res.status(400).json({ message: 'Team Not Found' });
        });
    }
    async addMatch(req, res) {
        const team = req.body.team;
        const newMatch = {
            league: req.body.league,
            match: req.body.match,
            time: req.body.time,
            weekday: req.body.weekday,
            period: req.body.period,
            place: req.body.place,
        };
        let teamModel = await Team_1.TeamModel.findOne({ ChineseName: team });
        // @ts-ignore
        teamModel.recentMatch.push(newMatch);
        // @ts-ignore
        teamModel.save()
            .then((docs) => {
            return res.status(200).json({ message: '添加比赛成功！' });
        })
            .catch((err) => {
            console.log(err);
            return res.status(400).json({ message: 'failed' });
        });
    }
    async deleteMatch(req, res) {
        const team = req.params.team;
        const matchId = req.params.id;
        let teamModel = await Team_1.TeamModel.findOne({ club: team });
        // @ts-ignore
        teamModel.recentMatch.pull(matchId);
        // @ts-ignore
        teamModel.save()
            .then((docs) => {
            return res.status(200).json({ message: '删除比赛成功！' });
        })
            .catch((err) => {
            console.log(err);
            return res.status(400).json({ message: 'failed' });
        });
    }
    getBigSixRecentMatch(req, res) {
        Team_1.TeamModel.find({ club: { $in: ['Mancity', 'Liverpool', 'TottenhamHotSpur', 'Arsenal', 'ManUtd', 'Chelsea', 'Wolfhampton'] } })
            .then(teams => {
            res.status(200).json({ teams: teams });
        })
            .catch(err => {
            console.log(err);
            res.status(200).json(err);
        });
    }
    getFocusRecentMatch(req, res) {
        Team_1.TeamModel.find({ club: { $in: ['Mancity', 'Liverpool', 'TottenhamHotSpur', 'Arsenal', 'ManUtd', 'Chelsea', 'Wolfhampton', 'Espanyol'] } })
            .then(teams => {
            res.status(200).json({ teams: teams });
        })
            .catch(err => {
            console.log(err);
            res.status(200).json(err);
        });
    }
}
exports.default = TeamController;
