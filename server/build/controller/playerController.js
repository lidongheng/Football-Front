"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../models/Player");
class PlayerController {
    add(req, res) {
        const newPlayer = {
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
        };
        // @ts-ignore
        const newPlayerModel = new Player_1.PlayerModel(newPlayer);
        newPlayerModel.save((err, player) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            else {
                return res.status(200).json({ success: true, message: '添加成功！' });
            }
        });
    }
    getTeamPlayer(req, res) {
        const team = req.params.team;
        Player_1.PlayerModel.find({ clubEname: team })
            .then(players => {
            res.status(200).json({ players: players });
        })
            .catch(err => {
            res.status(400).json(err);
        });
    }
    async getPlayers(req, res) {
        const pageNow = req.params.pageNow;
        const rows = await Player_1.PlayerModel.find().count();
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
            const players = await Player_1.PlayerModel.find()
                .skip(skipNum)
                .sort({ date: -1 })
                .limit(pageSize);
            res.status(200).json({ players, pages, rows });
        }
        catch (error) {
            res.status(400).json({ noContentFound: "找不到任何球员信息" });
        }
    }
    deletePlayer(req, res) {
        Player_1.PlayerModel.deleteOne({ _id: req.params.id })
            .then(player => {
            console.log(res);
            res.status(200).json({ message: '删除成功！' });
        })
            .catch(err => {
            console.log(err);
            res.status(400).json({ message: "删除失败！" });
        });
    }
    updatePlayer(req, res) {
        console.log(req.params.id);
        Player_1.PlayerModel.findById(req.params.id)
            .then((player) => {
            const updatePlayer = {
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
            };
            Player_1.PlayerModel.updateOne({ _id: req.params.id }, updatePlayer, { new: true })
                .then(player => {
                res.status(200).json({ message: '更新成功！' });
            })
                .catch(err => {
                res.status(400).json({ message: "更新时出错" });
            });
        })
            .catch(err => {
            console.log(err);
            res.status(400).json({ message: "找不到任何球员信息" });
        });
    }
    searchPlayer(req, res) {
        const name = req.params.name;
        const pageNow = req.params.pageNow;
        let data = [];
        Player_1.PlayerModel.find()
            .then(players => {
            if (!players) {
                return res.status(400).json({ message: '没有任何球员信息' });
            }
            players.forEach((player) => {
                if (player.player.indexOf(name) != -1) {
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
            res.status(200).json({ rows: data.length, players: newData });
        })
            .catch(err => {
            console.log(err);
            res.status(400).json({ message: "未查找到该球员！" });
        });
    }
}
exports.default = PlayerController;
