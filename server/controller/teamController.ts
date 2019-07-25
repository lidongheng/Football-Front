import {Request, Response} from 'express';
import { Team } from "../interface/team";
import { TeamModel } from '../models/Team';
import {Player} from "../interface/player";
import {PlayerModel} from "../models/Player";

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

}

export default TeamController;
