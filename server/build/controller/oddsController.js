"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AsiaOdds_1 = require("../models/AsiaOdds");
const EuroOdds_1 = require("../models/EuroOdds");
const Company_1 = require("../models/Company");
class OddsController {
    company(req, res) {
        const newCompany = {
            cid: req.body.cid,
            name: req.body.name,
            description: req.body.description
        };
        // @ts-ignore
        const newCompanyModel = new Company_1.CompanyModel(newCompany);
        newCompanyModel.save((err, company) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            else {
                return res.status(200).json({ success: true });
            }
        });
    }
    AsiaOdds(req, res) {
        const newAsiaOdds = {
            match: req.body.match,
            companyId: req.body.AsiaCompanyId,
            winOdd: req.body.Asiaodd.winOdd,
            drawOdd: req.body.Asiaodd.drawOdd,
            loseOdd: req.body.Asiaodd.loseOdd
        };
        // @ts-ignore
        const newAsiaOddsModel = new AsiaOdds_1.AsiaOddsModel(newAsiaOdds);
        newAsiaOddsModel.save((err, AsiaOdd) => {
            if (err) {
                return res.status(400).json({ error: err, message: "亚指添加失败，请手动添加" });
            }
            else {
                return res.status(200).json({ success: true });
            }
        });
    }
    EuroOdds(req, res) {
        const newEuroOdds = {
            match: req.body.match,
            companyId: req.body.EuroCompanyId,
            winOdd: req.body.Euroodd.winOdd,
            drawOdd: req.body.Euroodd.drawOdd,
            loseOdd: req.body.Euroodd.loseOdd
        };
        // @ts-ignore
        const newEuroOddsModel = new EuroOdds_1.EuroOddsModel(newEuroOdds);
        newEuroOddsModel.save((err, EuroOdd) => {
            if (err) {
                return res.status(400).json({ error: err, message: "欧指添加失败，请手动添加" });
            }
            else {
                return res.status(200).json({ success: true });
            }
        });
    }
}
exports.default = OddsController;
