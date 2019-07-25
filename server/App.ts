import express from 'express';
import bodyParser from "body-parser";
import {usersRouter} from "./routes/api/users";
import {betFormRouter} from "./routes/api/betForm";
import {oddsRouter} from "./routes/api/odds";
import {commentRouter} from "./routes/api/comment";
import {playersRouter} from "./routes/api/players";
import mongoose from './db/db';
import path from "path";
import passport from 'passport';
import { PassportConfig } from './config/passport';

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.database();
        this.middleware();
        this.routes();
    }

    /**
     * database connection
     */
    private database(): void {
        mongoose;
    };

    /**
     * http(s) request middleware
     */
    private middleware(): void {
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
        this.app.use(passport.initialize());
        const pConfig = new PassportConfig(passport);
        pConfig.init();
        this.app.use("/static", express.static(path.resolve("./","./public","img")));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            if(req.method === 'OPTIONS'){
                res.status(200).send();
            } else {
                next();
            }
        })
    };

    /**
     * API main v1 routes
     */
    private routes(): void {
        this.app.use('/api/users', usersRouter);
        this.app.use('/api/betForm', betFormRouter);
        this.app.use('/api/odds', oddsRouter);
        this.app.use('/api/comment', commentRouter);
        this.app.use('/api/players', playersRouter);
        this.app.use('/', (req, res) => {
            res.status(200).send({ message: `node-api is working!`});
        });
    }


}

export default new App().app;
