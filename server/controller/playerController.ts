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
                    return res.status(200).json({success:true, message:'添加成功！'});
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

    public deletePlayer (req: Request, res: Response) {
        PlayerModel.deleteOne({_id: req.params.id})
            .then(player => {
                console.log(res)
                res.status(200).json({message: '删除成功！'});
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: "删除失败！"});
            })
    }

    public updatePlayer (req: Request, res: Response) {
        console.log(req.params.id);
        PlayerModel.findById(req.params.id)
            .then((player:any) => {
                const updatePlayer:Player = {
                    league: req.body.league || player.league,
                    club: req.body.club || player.club,
                    player: req.body.player || player.player,
                    number: req.body.number || player.number,
                    nation: req.body.nation || player.nation,
                    position: req.body.position || player.position,
                    importance: req.body.importance || player.importance,
                    description: req.body.description || player.description,
                    clubEname: req.body.clubEname || player.clubEname,
                    attr: req.body.attr || player.attr
                }
                PlayerModel.updateOne({_id: req.params.id}, updatePlayer, {new: true})
                    .then(player => {
                        res.status(200).json({message: '更新成功！'});
                    })
                    .catch(err => {
                        res.status(400).json({message: "更新时出错"});
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({message: "找不到任何球员信息"});
            })
    }

    public searchPlayer (req: Request, res: Response) {
        const name = req.params.name;
        const pageNow = req.params.pageNow;
        let data:any = []
        PlayerModel.find()
            .then(players => {
                if (!players) {
                    return res.status(400).json({message: '没有任何球员信息'});
                }
                players.forEach((player:any) => {
                    if(player.player.indexOf(name) != -1) {
                        data.push(player);
                    }
                });
                let pageSize = 10;
                let index = pageSize * (pageNow - 1);
                let newData = [];
                for (let i = index; i < pageSize * pageNow; i++) {
                    if (data[i] != null) {
                        newData.unshift(data[i]);
                    }
                }
                res.status(200).json({rows: data.length, players: newData});
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({message: "未查找到该球员！"});
            })
    }

    public async searchNationalPlayer (req: Request, res: Response) {
        const nation = req.params.nation;
        console.log('111')
        const pageNow = req.params.pageNow;
        const rows = await PlayerModel.find({nation: nation}).count();
        const pageSize = 10;
        let pages = 0;
        if (rows % pageSize==0) {
            pages = rows/pageSize;
        } else {
            pages = rows/pageSize+1;
        }
        const skipNum = (pageNow-1)*pageSize;
        try {
            const players = await PlayerModel.find({nation: nation})
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
