"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
class Validator {
    static registerInput(data) {
        let errors = { name: "" };
        if (!validator_1.default.isLength(data.name, { min: 2, max: 30 })) {
            errors.name = '名字的长度不能小于2位并且不能大于30位!';
        }
        if (validator_1.default.isEmpty(data.name)) {
            errors.name = '名字不能为空!';
        }
        return {
            errors,
            // @ts-ignore
            isValid: this.isEmpty(errors)
        };
    }
    static isEmpty(value) {
        return value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0);
    }
}
exports.Validator = Validator;
