"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forwardController_1 = __importDefault(require("../../controller/forwardController"));
exports.forwardRouter = express_1.Router();
const forward = new forwardController_1.default();
// $route POST api/forwards/
// @desc 返回的请求的json数据
// @access public
exports.forwardRouter.post('/', (req, res) => {
    forward.add(req, res);
});
// $route GET api/forwards/
// @desc 返回的请求的json数据
// @access public
exports.forwardRouter.get('/', (req, res) => {
    forward.get(req, res);
});
// $route DELETE api/forwards/:id/
// @desc 返回的请求的json数据
// @access public
exports.forwardRouter.delete('/:id/', (req, res) => {
    forward.delete(req, res);
});
