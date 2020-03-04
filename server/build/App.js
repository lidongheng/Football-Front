"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = require("./routes/api/users");
const betForm_1 = require("./routes/api/betForm");
const odds_1 = require("./routes/api/odds");
const comment_1 = require("./routes/api/comment");
const players_1 = require("./routes/api/players");
const teams_1 = require("./routes/api/teams");
const articles_1 = require("./routes/api/articles");
const admin_1 = require("./routes/api/admin");
const bet_1 = require("./routes/api/bet");
const timeline_1 = require("./routes/api/timeline");
const forward_1 = require("./routes/api/forward");
const forecast_1 = require("./routes/api/forecast");
const db_1 = __importDefault(require("./db/db"));
const path_1 = __importDefault(require("path"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = require("./config/passport");
const errorHandling_1 = require("./routes/api/general/errorHandling");
class App {
    constructor() {
        this.app = express_1.default();
        this.database();
        this.middleware();
        this.routes();
    }
    /**
     * database connection
     */
    database() {
        db_1.default;
    }
    ;
    /**
     * http(s) request middleware
     */
    middleware() {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.app.use(passport_1.default.initialize());
        this.app.use(errorHandling_1.apiErrorHandler);
        const pConfig = new passport_2.PassportConfig(passport_1.default);
        pConfig.init();
        this.app.use("/static", express_1.default.static(path_1.default.resolve("./", "./public", "img")));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            if (req.method === 'OPTIONS') {
                res.status(200).send();
            }
            else {
                next();
            }
        });
    }
    ;
    /**
     * API main v1 routes
     */
    routes() {
        this.app.use('/api/users', users_1.usersRouter);
        this.app.use('/api/betForm', betForm_1.betFormRouter);
        this.app.use('/api/odds', odds_1.oddsRouter);
        this.app.use('/api/comment', comment_1.commentRouter);
        this.app.use('/api/players', players_1.playersRouter);
        this.app.use('/api/teams', teams_1.teamsRouter);
        this.app.use('/api/articles', articles_1.articlesRouter);
        this.app.use('/api/admin', admin_1.adminRouter);
        this.app.use('/api/bets', bet_1.betRouter);
        this.app.use('/api/timeline', timeline_1.timelineRouter);
        this.app.use('/api/forwards', forward_1.forwardRouter);
        this.app.use('/api/forecast', forecast_1.forecastRouter),
            this.app.use('/', (req, res) => {
                console.log(req.url);
                res.status(200).send({ message: `node-api is working!` });
            });
    }
}
exports.default = new App().app;
