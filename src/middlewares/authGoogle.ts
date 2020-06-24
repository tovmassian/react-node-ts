import * as passport from 'passport';
import { NextFunction, Request, Response } from 'express';

export const authGoogleWithParams = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })(req, res, next);
};

export const authGoogle = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate('google')(req, res, next);
};
