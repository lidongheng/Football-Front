import {Request, Response} from 'express';
import { AsiaOddsModel } from '../models/AsiaOdds';
import { EuroOddsModel } from "../models/EuroOdds";
import { companyModel } from "../models/company";
import { AsiaOdds } from "../interface/AsiaOdds";
import { EuroOdds } from "../interface/EuroOdds";
import { company } from "../interface/company";

class OddsController {
    public company (req: Request, res: Response) {
        const newCompany:company = {
            cid: req.body.cid,
            name: req.body.name,
            description: req.body.description
        }
        // @ts-ignore
        const newCompanyModel = new companyModel(newCompany);
        newCompanyModel.save((err: any, company: any) => {
            if (err) {
                return res.status(400).json({error:err});
            } else {
                return res.status(200).json({success:true});
            }
        })
    }

    public AsiaOdds (req: Request, res: Response) {
        const newAsiaOdds:AsiaOdds = {
            match: req.body.match,
            companyId: req.body.AsiaCompanyId,
            winOdd: req.body.Asiaodd.winOdd,
            drawOdd: req.body.Asiaodd.drawOdd,
            loseOdd: req.body.Asiaodd.loseOdd
        };
        // @ts-ignore
        const newAsiaOddsModel = new AsiaOddsModel(newAsiaOdds);
        newAsiaOddsModel.save((err: any, AsiaOdd: any) => {
            if (err) {
                return res.status(400).json({error:err,message:"亚指添加失败，请手动添加"});
            } else {
                return res.status(200).json({success:true});
            }
        })
    }

    public EuroOdds (req: Request, res: Response) {
        const newEuroOdds:EuroOdds = {
            match: req.body.match,
            companyId: req.body.EuroCompanyId,
            winOdd: req.body.Euroodd.winOdd,
            drawOdd: req.body.Euroodd.drawOdd,
            loseOdd: req.body.Euroodd.loseOdd
        };
        // @ts-ignore
        const newEuroOddsModel = new EuroOddsModel(newEuroOdds);
        newEuroOddsModel.save((err: any, EuroOdd: any) => {
            if (err) {
                return res.status(400).json({error:err,message:"欧指添加失败，请手动添加"});
            } else {
                return res.status(200).json({success:true});
            }
        })
    }
}

export default OddsController;
