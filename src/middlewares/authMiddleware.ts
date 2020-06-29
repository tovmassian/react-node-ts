import * as passport from 'passport';
import { NextFunction, Request, Response } from 'express';

export const authGoogleWithParamsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })(req, res, next);
};

export const authGoogleMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate('google')(req, res, next);
};
