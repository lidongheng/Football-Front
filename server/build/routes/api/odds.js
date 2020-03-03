"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const oddsController_1 = __importDefault(require("../../controller/oddsController"));
exports.oddsRouter = express_1.Router();
const odds = new oddsController_1.default();
// $route POST api/odds/company
// @desc 返回的请求的json数据
// @access public
exports.oddsRouter.post('/company', (req, res) => {
    odds.company(req, res);
});
// $route POST api/odds/AsiaOdds
// @desc 返回的请求的json数据
// @access public
exports.oddsRouter.post('/AsiaOdds', (req, res) => {
    odds.AsiaOdds(req, res);
});
// $route POST api/odds/EuroOdds
// @desc 返回的请求的json数据
// @access public
exports.oddsRouter.post('/EuroOdds', (req, res) => {
    odds.EuroOdds(req, res);
});
