import {Request, Response} from 'express';
import {ForecastModel} from "../models/Forecast";
import {Forecast} from "../interface/forecast";

class ForecastController {
    public add (req: Request, res: Response) {
        const forecast:Forecast = {
            team: req.body.team,
            program: req.body.program,
            time: req.body.time,
            percent: req.body.percent,
            status: req.body.status,
            url: req.body.url
        };
        // @ts-ignore
        const newForecastModel = new ForecastModel(forecast);
        newForecastModel.save()
            .then((docs:any) => {
                res.status(200).json({message: '添加成功！'});
            })
            .catch((err:any) => {
                console.log(err);
                res.status(400).json({message: '添加失败！'});
            })
    }

    public get(req: Request, res: Response) {
        ForecastModel.find().sort({_id: -1}).limit(10)
            .then((forecast:any) => {
                res.status(200).json({forecast: forecast});
            })
            .catch((err:any) => {
                console.log(err);
                res.status(400).json({message: '查询失败！'});
            })
    }

    public delete (req: Request, res: Response) {
        ForecastModel.findOneAndDelete(req.params._id)
            .then((docs:any) => {
                res.status(200).json({message: '删除成功！'});
            })
            .catch((err:any) => {
                console.log(err);
                res.status(400).json({message: '删除失败！'});
            })
    }
}

export default ForecastController
