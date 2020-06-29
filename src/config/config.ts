import { Environment } from '../enums';

export interface IConfig {
    mongoUri: string | undefined;
    googleClientId: string | undefined;
    googleSecret: string | undefined;
    cookieSessionKey: string | undefined;
}

const config: IConfig = process.env.NODE_ENV === Environment.DEVELOPMENT ?
    require('./dev.config').config :
    require('./prod.config').config;

export default config as IConfig;
