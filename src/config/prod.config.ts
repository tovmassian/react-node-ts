import { IConfig } from './config';

const config: IConfig = {
    mongoUri: process.env.MONGO_URI,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleSecret: process.env.GOOGLE_SECRET,
    cookieSessionKey: process.env.COOKIE_SESSION_KEY,
};

export { config };
