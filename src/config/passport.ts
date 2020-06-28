import * as passport from 'passport';
import { Profile, Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth20';
import User, { IUser } from '../models/User';
import config from './config';

const { googleClientId, googleSecret } = config;

passport.serializeUser((user: IUser, done) => {
    done('', user.id);
});

passport.deserializeUser(async (id: number, done: VerifyCallback) => {
    const user: IUser | null = await User.findById(id);
    done('', user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: googleClientId || 'clientId',
            clientSecret: googleSecret || 'clientSecret',
            callbackURL: '/auth/google/callback',
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
            if (profile._json.hd === 'picsart.com') {
                try {
                    // creating Model Instance and save to DB
                    let user: IUser | null = await User.findOne({ googleId: profile.id });
                    if (user) {
                        console.log('User exists');
                    } else {
                        console.log('Creating new user');
                        user = await new User({ googleId: profile.id }).save();
                    }
                    done('', user);
                } catch (e) {
                    console.log(e.message);
                }
            } else {
                throw Error('Please use your PicsArt account for authorization');
            }
        },
    ),
);