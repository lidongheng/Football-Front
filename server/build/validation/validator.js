"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
class Validator {
    static registerInput(data) {
        data.username = !this.isEmpty(data.username) ? data.username : '';
        data.email = !this.isEmpty(data.email) ? data.email : '';
        data.password = !this.isEmpty(data.password) ? data.password : '';
        data.password2 = !this.isEmpty(data.password2) ? data.password2 : '';
        let errors = { username: "", email: "", password: "", password2: "" };
        if (!validator_1.default.isLength(data.username, { min: 2, max: 30 })) {
            errors.username = '名字的长度不能小于2位并且不能大于30位!';
        }
        if (validator_1.default.isEmpty(data.username)) {
            errors.username = '名字不能为空!';
        }
        if (validator_1.default.isEmpty(data.email)) {
            errors.email = '邮箱不能为空!';
        }
        if (!validator_1.default.isEmail(data.email)) {
            errors.email = '邮箱不合法!';
        }
        if (validator_1.default.isEmpty(data.password)) {
            errors.password = '密码不能为空!';
        }
        if (!validator_1.default.isLength(data.password, { min: 6, max: 30 })) {
            errors.password = '密码的长度不能小于6位并且不能大于30位!';
        }
        if (validator_1.default.isEmpty(data.password2)) {
            errors.password2 = '确认密码不能为空!';
        }
        if (!validator_1.default.equals(data.password, data.password2)) {
            errors.password2 = '两次密码输入不一致';
        }
        return {
            errors,
            // @ts-ignore
            isValid: this.isEmpty(errors)
        };
    }
    static loginInput(data) {
        data.email = !this.isEmpty(data.email) ? data.email : '';
        data.password = !this.isEmpty(data.password) ? data.password : '';
        let errors = { email: "", password: "" };
        if (validator_1.default.isEmpty(data.email)) {
            errors.email = '邮箱不能为空!';
        }
        if (!validator_1.default.isEmail(data.email)) {
            errors.email = '邮箱不合法!';
        }
        if (validator_1.default.isEmpty(data.password)) {
            errors.password = '密码不能为空!';
        }
        return {
            errors,
            // @ts-ignore
            isValid: this.isEmpty(errors)
        };
    }
    static commentInput(data) {
        data.content = !this.isEmpty(data.content) ? data.content : '';
        let errors = { content: "" };
        if (validator_1.default.isEmpty(data.content)) {
            errors.content = '不能提交空白评论!';
        }
        if (!validator_1.default.isLength(data.content, { max: 140 })) {
            errors.content = '输入字数超过140字！';
        }
        return {
            errors,
            // @ts-ignore
            isValid: this.isEmpty(errors)
        };
    }
    static articleInput(data) {
        data.title = !this.isEmpty(data.title) ? data.title : '';
        data.content = !this.isEmpty(data.content) ? data.content : '';
        data.about = !this.isEmpty(data.about) ? data.about : '';
        let errors = { title: "", content: "", about: "" };
        if (validator_1.default.isEmpty(data.title)) {
            errors.title = '标题不能为空!';
        }
        if (validator_1.default.isEmpty(data.content)) {
            errors.content = '内容不能为空!';
        }
        if (validator_1.default.isEmpty(data.about)) {
            errors.about = '关联球队不能为空!';
        }
        return {
            errors,
            // @ts-ignore
            isValid: this.isEmpty(errors)
        };
    }
    static betFormInput(data) {
        data.league = !this.isEmpty(data.league) ? data.league : '';
        data.rounds = !this.isEmpty(data.rounds) ? data.rounds : '';
        data.host = !this.isEmpty(data.host) ? data.host : '';
        data.away = !this.isEmpty(data.away) ? data.away : '';
        data.matchTime = !this.isEmpty(data.matchTime) ? data.matchTime : '';
        data.isSingleMatch = !this.isEmpty(data.isSingleMatch) ? data.isSingleMatch : '';
        data.analysis = !this.isEmpty(data.analysis) ? data.analysis : '';
        data.hostInjury = !this.isEmpty(data.hostInjury) ? data.hostInjury : '';
        data.awayInjury = !this.isEmpty(data.awayInjury) ? data.awayInjury : '';
        data.hostExpectLineup = !this.isEmpty(data.hostExpectLineup) ? data.hostExpectLineup : '';
        data.hostExpectBench = !this.isEmpty(data.hostExpectBench) ? data.hostExpectBench : '';
        data.awayExpectLineup = !this.isEmpty(data.awayExpectLineup) ? data.awayExpectLineup : '';
        data.awayExpectBench = !this.isEmpty(data.awayExpectBench) ? data.awayExpectBench : '';
        data.hostNews = !this.isEmpty(data.hostNews) ? data.hostNews : '';
        data.awayNews = !this.isEmpty(data.awayNews) ? data.awayNews : '';
        let errors = { league: "", rounds: "", host: "", away: "", matchTime: "", isSingleMatch: "", analysis: "",
            hostInjury: "", awayInjury: "", hostExpectLineup: "", hostExpectBench: "", awayExpectLineup: "",
            awayExpectBench: "", hostNews: "", awayNews: "" };
        if (validator_1.default.isEmpty(data.league)) {
            errors.league = '联赛名不能为空!';
        }
        if (validator_1.default.isEmpty(data.rounds)) {
            errors.rounds = '轮次不能为空!';
        }
        if (validator_1.default.isEmpty(data.host)) {
            errors.host = '主队不能为空!';
        }
        if (validator_1.default.isEmpty(data.away)) {
            errors.away = '客队不能为空!';
        }
        if (validator_1.default.isEmpty(data.matchTime)) {
            errors.matchTime = '比赛时间不能为空!';
        }
        if (validator_1.default.isEmpty(data.isSingleMatch)) {
            errors.isSingleMatch = '是否竞彩单关不能为空!';
        }
        if (validator_1.default.isEmpty(data.analysis)) {
            errors.analysis = '战意不能为空!';
        }
        if (validator_1.default.isEmpty(data.hostInjury)) {
            errors.hostInjury = '主队伤病名单不能为空!';
        }
        if (validator_1.default.isEmpty(data.awayInjury)) {
            errors.awayInjury = '客队伤病名单不能为空!';
        }
        if (validator_1.default.isEmpty(data.hostExpectLineup)) {
            errors.hostExpectLineup = '主队阵容不能为空!';
        }
        if (validator_1.default.isEmpty(data.hostExpectBench)) {
            errors.hostExpectBench = '主队替补不能为空!';
        }
        if (validator_1.default.isEmpty(data.awayExpectLineup)) {
            errors.awayExpectLineup = '客队阵容不能为空!';
        }
        if (validator_1.default.isEmpty(data.awayExpectBench)) {
            errors.awayExpectBench = '客队替补不能为空!';
        }
        if (validator_1.default.isEmpty(data.hostNews)) {
            errors.hostNews = '主队新闻不能为空!';
        }
        if (validator_1.default.isEmpty(data.awayNews)) {
            errors.awayNews = '客队新闻不能为空!';
        }
        return {
            errors,
            // @ts-ignore
            isValid: this.isEmpty(errors)
        };
    }
    static betInput(data) {
        data.league = !this.isEmpty(data.league) ? data.league : '';
        data.number = !this.isEmpty(data.number) ? data.number : '';
        data.host = !this.isEmpty(data.host) ? data.host : '';
        data.away = !this.isEmpty(data.away) ? data.away : '';
        data.handicap = !this.isEmpty(data.handicap) ? data.handicap : '';
        data.profit = !this.isEmpty(data.profit) ? data.profit : '';
        data.amount = !this.isEmpty(data.amount) ? data.amount : '';
        let errors = { league: "", number: "", host: "", away: "", handicap: "",
            profit: "", amount: "", betTeam: "" };
        if (validator_1.default.isEmpty(data.league)) {
            errors.league = '联赛名不能为空!';
        }
        if (validator_1.default.isEmpty(data.number)) {
            errors.number = '编号不能为空!';
        }
        if (validator_1.default.isEmpty(data.host)) {
            errors.host = '主队不能为空!';
        }
        if (validator_1.default.isEmpty(data.away)) {
            errors.away = '客队不能为空!';
        }
        if (validator_1.default.isEmpty(data.betTeam)) {
            errors.betTeam = '投注球队不能为空!';
        }
        if (validator_1.default.isEmpty(data.handicap)) {
            errors.handicap = '盘口不能为空!';
        }
        if (validator_1.default.isEmpty(data.profit)) {
            errors.profit = '水位不能为空!';
        }
        if (validator_1.default.isEmpty(data.amount)) {
            errors.amount = '投注额不能为空!';
        }
        if (Number(data.amount) < 10) {
            errors.amount = '输入金额最小为10元!';
        }
        return {
            errors,
            // @ts-ignore
            isValid: this.isEmpty(errors)
        };
    }
    static isEmpty(value) {
        if (typeof value === 'string' && value.trim().length === 0) {
            return true;
        }
        else if (typeof value === 'object') {
            return Object.values(value).every(v => v === "");
        }
        else {
            return value === undefined || value === null;
        }
    }
}
exports.Validator = Validator;
