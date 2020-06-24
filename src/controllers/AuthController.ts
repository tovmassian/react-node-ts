import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Get, Middleware } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import '../config/passport';
import { authGoogle, authGoogleWithParams } from '../middlewares/authGoogle';

@Controller('auth/google')
export class AuthController {
    @Get('')
    @Middleware(authGoogleWithParams)
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

    @Get('callback')
    @Middleware(authGoogle)
    private googleAuthCallback(req: Request, res: Response) {
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
}

export default AuthController;
