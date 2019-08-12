import {Request, Response} from 'express';
import { Player } from "../interface/player";
import { PlayerModel } from '../models/Player';

class PlayerController {
    public add (req: Request, res: Response) {
        const newPlayer:Player = {
                league: req.body.league,
                club: req.body.club,
                player: req.body.player,
                number: req.body.number,
                nation: req.body.nation,
                position: req.body.position,
                importance: req.body.importance,
                description: req.body.description,
                clubEname: req.body.clubEname,
                attr: req.body.attr
            }
            // @ts-ignore
            const newPlayerModel = new PlayerModel(newPlayer);
            newPlayerModel.save((err: any, player: any) => {
                if (err) {
                    return res.status(400).json({error:err});
                } else {
                    return res.status(200).json({success:true});
                }
        })
    }

    public getTeamPlayer (req: Request, res: Response) {
        const team = req.params.team;
        PlayerModel.find({clubEname: team})
            .then(players => {
                res.status(200).json({players: players});
            })
            .catch(err => {
                res.status(400).json(err);
            })

    }

    public async getPlayers (req: Request, res: Response) {
        const pageNow = req.params.pageNow;
        const rows = await PlayerModel.find().count();
        const pageSize = 10;
        let pages = 0;
        if (rows % pageSize==0) {
            pages = rows/pageSize;
        } else {
            pages = rows/pageSize+1;
        }
        const skipNum = (pageNow-1)*pageSize;
        try {
            const players = await PlayerModel.find()
                .skip(skipNum)
                .sort({date: -1})
                .limit(pageSize);
            res.status(200).json({players, pages, rows});
        } catch (error) {
            res.status(400).json({noContentFound: "找不到任何球员信息"});
        }
    }
}

export default PlayerController;
