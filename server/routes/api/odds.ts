import { Router } from 'express';
import oddsController from '../../controller/oddsController';

export const oddsRouter = Router();
const odds = new oddsController();

// $route POST api/odds/company
// @desc 返回的请求的json数据
// @access public
oddsRouter.post('/company', (req, res) => {
    odds.company(req, res);
});

// $route POST api/odds/AsiaOdds
// @desc 返回的请求的json数据
// @access public
oddsRouter.post('/AsiaOdds', (req, res) => {
    odds.AsiaOdds(req, res);
});

// $route POST api/odds/EuroOdds
// @desc 返回的请求的json数据
// @access public
oddsRouter.post('/EuroOdds', (req, res) => {
    odds.EuroOdds(req, res);
});
