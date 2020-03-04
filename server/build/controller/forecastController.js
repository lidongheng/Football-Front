"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Forecast_1 = require("../models/Forecast");
class ForecastController {
    add(req, res) {
        const forecast = {
            team: req.body.team,
            program: req.body.program,
            time: req.body.time,
            percent: req.body.percent,
            status: req.body.status,
            url: req.body.url
        };
        // @ts-ignore
        const newForecastModel = new Forecast_1.ForecastModel(forecast);
        newForecastModel.save()
            .then((docs) => {
            res.status(200).json({ message: '添加成功！' });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({ message: '添加失败！' });
        });
    }
    get(req, res) {
        Forecast_1.ForecastModel.find().sort({ _id: -1 }).limit(10)
            .then((forecast) => {
            res.status(200).json({ forecast: forecast });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({ message: '查询失败！' });
        });
    }
    delete(req, res) {
        Forecast_1.ForecastModel.findOneAndDelete(req.params._id)
            .then((docs) => {
            res.status(200).json({ message: '删除成功！' });
        })
            .catch((err) => {
            console.log(err);
            res.status(400).json({ message: '删除失败！' });
        });
    }
}
exports.default = ForecastController;
