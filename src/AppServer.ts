import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as passport from 'passport';
import * as path from 'path';
import * as controllers from './controllers';
import './config/passport';
import connectDB from './config/database';
import cookieSession = require('cookie-session');
import config from './config/config';

class AppServer extends Server {
    private readonly SERVER_START_MSG = 'Server started on port: ';
    private readonly DEV_MSG = 'Express Server is running in development mode. No front-end content is being served.';

    constructor() {
        super(true);
        // Connect to MongoDB
        connectDB();

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.authorize();

        this.setupControllers();

        // Point to front-end code
        if (process.env.NODE_ENV !== 'production') {
            Logger.Info('Starting server in development mode');
            const msg = this.DEV_MSG + process.env.EXPRESS_PORT;
            this.app.get('*', (req, res) => res.send(msg));
        } else {
            this.serveFrontEndProd();
        }
    }

    private setupControllers(): void {
        const controllerInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const Controller = (controllers as any)[name];
                controllerInstances.push(new Controller());
            }
        }
        super.addControllers(controllerInstances);
    }

    private serveFrontEndProd(): void {
        const dir = path.join(__dirname, 'public/app/');
        // Set the static and views directory
        this.app.set('views', dir);
        this.app.use(express.static(dir));
        // Serve front-end content
        this.app.get('*', (req, res) => {
            res.sendFile('index.html', { root: dir });
        });
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_START_MSG + port);
        });
    }

    private authorize(): void {
        this.app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [config.cookieSessionKey || ''] }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }
}

export default AppServer;
