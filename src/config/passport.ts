import * as passport from 'passport';
import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';
import './dotEnv';

const { GOOGLE_CLIENT_ID, GOOGLE_SECRET, GOOGLE_CALLBACK_URL } = process.env;

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID || '',
            clientSecret: GOOGLE_SECRET || '',
            callbackURL: GOOGLE_CALLBACK_URL || '',
        },
        (accessToken: string, refreshToken: string, profile: Profile) => {
            console.log(profile);
        },
    ),
);
