"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forecastController_1 = __importDefault(require("../../controller/forecastController"));
exports.forecastRouter = express_1.Router();
const forecast = new forecastController_1.default();
// $route POST api/forecast/
// @desc 返回的请求的json数据
// @access public
exports.forecastRouter.post('/', (req, res) => {
    forecast.add(req, res);
});
// $route GET api/forecast/
// @desc 返回的请求的json数据
// @access public
exports.forecastRouter.get('/', (req, res) => {
    forecast.get(req, res);
});
// $route DELETE api/forwards/:id/
// @desc 返回的请求的json数据
// @access public
exports.forecastRouter.delete('/:id/', (req, res) => {
    forecast.delete(req, res);
});
