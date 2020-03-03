"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timelineController_1 = __importDefault(require("../../controller/timelineController"));
exports.timelineRouter = express_1.Router();
const timeline = new timelineController_1.default();
// $route GET api/timeline/test
// @desc 返回的请求的json数据
// @access public
exports.timelineRouter.get('/test', (req, res) => {
    res.json({ msg: "team works" });
});
// $route POST api/timeline/
// @desc
// @access public
exports.timelineRouter.post('/', (req, res) => {
    timeline.add(req, res);
});
// $route GET api/timeline/
// @desc
// @access public
exports.timelineRouter.get('/', (req, res) => {
    timeline.get(req, res)
        .catch(err => {
        console.log(err);
        return res.status(500).json(err);
    });
});
