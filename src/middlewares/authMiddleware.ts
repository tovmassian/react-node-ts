import * as passport from 'passport';
import { evalQueryBoolean } from '@fnzc/node-open-policy-agent';
import * as fs from 'fs';

import { NextFunction, Request, Response } from 'express';
import { CustomRequest, IUser } from '../controllers/DemoController';

interface Input {
    subject: string;
    resource: string;
    action: string;
}

export const authGoogleWithParamsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })(req, res, next);
};

export const authGoogleMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate('google')(req, res, next);
};

export const authZOPAPermission = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userID = (req.user as IUser)?.googleId || '';
        const input: Input = {
            subject: userID,
            resource: req.path,
            action: handleAction(req.method),
        };
        await fs.promises.writeFile('src/config/opa/data.json', JSON.stringify(input));
        const isAllowed = await evalQueryBoolean({
            data: 'src/config/opa/policy.rego',
            input: 'src/config/opa/data.json',
            package: 'opa.test',
        });
        (req as CustomRequest).isAllowed = Boolean(isAllowed);
        if (!Boolean(isAllowed)) {
            throw Error('Not Alowed');
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

export function handleAction(actionType: string): string {
    return actionType === 'GET' ? 'read' : 'write';
}
