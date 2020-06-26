import * as passport from 'passport';
import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User, { IUser } from '../models/User';
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
            if (profile._json.hd === 'picsart.com') {
                try {
                    // creating Model Instance and save to DB
                    new User({ googleId: profile.id }).save();
                } catch (e) {
                    console.log(e.message);
                }
            } else {
                throw Error('Please use your PicsArt account for authorization');
            }
        },
    ),
);
