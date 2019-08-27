import {Request, Response} from 'express';
import { Team } from "../interface/team";
import { Match } from "../interface/match";
import { TeamModel } from '../models/Team';

class TeamController {
    public add (req: Request, res: Response) {
        const newTeam:Team = {
            league: req.body.league,
            club: req.body.club,
            ChineseName: req.body.ChineseName
        };
        // @ts-ignore
        const newTeamModel = new TeamModel(newTeam);
        newTeamModel.save((err: any, team: any) => {
            if (err) {
                return res.status(400).json({error:err});
            } else {
                return res.status(200).json({success:true});
            }
        })
    }

    public updateStyle (req: Request, res: Response) {
        const style = req.body.style;
        const club = req.body.club;
        TeamModel.updateOne({club: club}, {$set: {style: style}})
            .then(club => {
                if (club.nModified === 0) {
                    return res.status(400).json({message: 'not this club!'});
                }
                return res.status(200).json({success:true, message: "修改成功！"});
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({message: 'PUT error!'});
            })
    }

    public getTeamStyle (req: Request, res: Response) {
        const team = req.params.team;
        TeamModel.findOne({club: team})
            .then(team => {
                return res.status(200).json({team: team});
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({message: 'Team Not Found'});
            })
    }
    public async addMatch (req: Request, res: Response) {
        const team = req.body.team;
        const newMatch:Match = {
            league: req.body.league,
            match: req.body.match,
            time: req.body.time,
            weekday: req.body.weekday,
            period: req.body.period,
            place: req.body.place,
        };
        let teamModel = await TeamModel.findOne({ChineseName: team});
        // @ts-ignore
        teamModel.recentMatch.push(newMatch);
        // @ts-ignore
        teamModel.save()
            .then((docs:any) => {
                return res.status(200).json({message: '添加比赛成功！'});
            })
            .catch((err:any) => {
                console.log(err);
                return res.status(400).json({message: 'failed'});
            })
    }

    public async deleteMatch (req: Request, res: Response) {
        const team = req.params.team;
        const matchId = req.params.id;
        let teamModel = await TeamModel.findOne({club: team});
        // @ts-ignore
        teamModel.recentMatch.pull(matchId);
        // @ts-ignore
        teamModel.save()
            .then((docs:any) => {
                return res.status(200).json({message: '删除比赛成功！'});
            })
            .catch((err:any) => {
                console.log(err);
                return res.status(400).json({message: 'failed'});
            })
    }

    public getBigSixRecentMatch (req: Request, res: Response) {
        TeamModel.find({club: {$in: ['Mancity', 'Liverpool', 'TottenhamHotSpur', 'Arsenal', 'ManUtd', 'Chelsea', 'Wolfhampton']}})
            .then(teams => {
                res.status(200).json({teams: teams})
            })
            .catch(err => {
                console.log(err);
                res.status(200).json(err);
            })
    }

    public getFocusRecentMatch (req: Request, res: Response) {
        TeamModel.find({club: {$in: ['Mancity', 'Liverpool', 'TottenhamHotSpur', 'Arsenal', 'ManUtd', 'Chelsea', 'Wolfhampton', 'Espanyol']}})
            .then(teams => {
                res.status(200).json({teams: teams})
            })
            .catch(err => {
                console.log(err);
                res.status(200).json(err);
            })
    }

}

export default TeamController;
