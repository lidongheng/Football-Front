import express from 'express';
import bodyParser from "body-parser";
import {usersRouter} from "./routes/api/users";
import mongoose from 'mongoose';
import db from './config/keys';
import path from "path";

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
        mongoose
            .connect(db, { useNewUrlParser: true })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));
    };

    /**
     * http(s) request middleware
     */
    private middleware(): void {
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
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
        this.app.use('/', (req, res) => {
            res.status(200).send({ message: `node-api is working!`});
        });
    }


}

export default new App().app;