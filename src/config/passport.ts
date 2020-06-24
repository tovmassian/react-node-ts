import * as passport from 'passport';
import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';
import * as googleConfig from './google.json';

const { clientID, clientSecret, callbackURL } = googleConfig;

passport.use(
    new GoogleStrategy(
        {
            clientID,
            clientSecret,
            callbackURL,
        },
        (accessToken: string, refreshToken: string, profile: Profile) => {
            console.log(profile);
        },
    ),
);
