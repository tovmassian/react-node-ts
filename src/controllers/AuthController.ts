import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Get, Middleware } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { authGoogleMiddleware, authGoogleWithParamsMiddleware } from '../middlewares/authMiddleWare';

@Controller('auth')
export class AuthController {
    @Get('google')
    @Middleware(authGoogleWithParamsMiddleware)
    private loginWithGoogle(req: Request, res: Response) {
        try {
            return res.status(OK).json({
                message: 'logged in',
            });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Get('google/callback')
    @Middleware(authGoogleMiddleware)
    private googleAuthCallback(req: Request, res: Response) {
        try {
            return res.status(OK).json(req.session);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Get('logout')
    private logout(req: Request, res: Response) {
        try {
            req.logOut();
            res.send(JSON.stringify(req.user));
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default AuthController;
