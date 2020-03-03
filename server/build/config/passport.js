"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const secret_1 = __importDefault(require("../config/secret"));
const Users_1 = require("../models/Users");
/**
 * passport jwt configuration
 */
class PassportConfig {
    constructor(passport) {
        this.passport = passport;
    }
    init() {
        let opts = {
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secret_1.default
        };
        this.passport.use(new passport_jwt_1.Strategy(opts, (jwtPayload, done) => {
            console.log(jwtPayload);
            Users_1.UserModel.findById({ _id: jwtPayload.id })
                .then(user => {
                if (user) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            })
                .catch(err => {
                return done(err, false);
            });
        }));
    }
}
exports.PassportConfig = PassportConfig;
