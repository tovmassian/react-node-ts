export interface IConfig {
    mongoUri: string | undefined;
    googleClientId: string | undefined;
    googleSecret: string | undefined;
    cookieSessionKey: string | undefined;
}

const config: IConfig = process.env.NODE_ENV === 'development' ?
    require('./dev.config').config as IConfig :
    require('./prod.config').config as IConfig;

export default config as IConfig;
