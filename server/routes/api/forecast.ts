import { Router } from 'express';
import ForecastController from '../../controller/forecastController'

export const forecastRouter = Router();
const forecast = new ForecastController();

// $route POST api/forecast/
// @desc 返回的请求的json数据
// @access public
forecastRouter.post('/', (req, res) => {
    forecast.add(req, res);
});

// $route GET api/forecast/
// @desc 返回的请求的json数据
// @access public
forecastRouter.get('/', (req, res) => {
    forecast.get(req, res);
});

// $route DELETE api/forwards/:id/
// @desc 返回的请求的json数据
// @access public
forecastRouter.delete('/:id/', (req, res) => {
    forecast.delete(req, res);
});
