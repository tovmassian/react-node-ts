import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';

export interface IUser extends Express.User {
    googleId?: string;
}

@Controller('api')
export class DemoController {
    public static readonly SUCCESS_MSG = 'GreetingZ ';

    @Get('greet/:name')
    private sayHello(req: Request, res: Response) {
        try {
            const { name } = req.params;
            if (name === 'make_it_fail') {
                throw Error('User triggered failure');
            }
            Logger.Info(DemoController.SUCCESS_MSG + name);
            return res.status(OK).json({
                message: DemoController.SUCCESS_MSG + name,
            });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Get('user')
    private currentUser(req: Request, res: Response) {
        try {
            if (req.user) {
                const user: IUser = req.user;
                res.send({
                    role: 'admin',
                    googleId: user.googleId,
                });
            }
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default DemoController;
