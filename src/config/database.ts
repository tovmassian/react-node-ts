import { Logger } from '@overnightjs/logger';
import { ConnectionOptions, connect } from 'mongoose';
import config from './config';

const connectDB = async () => {
    try {
        const { mongoUri } = config;
        const options: ConnectionOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        };
        await connect(mongoUri as string, options);
        Logger.Info('MongoDB Connected...');
    } catch (err) {
        Logger.Err('Unable to connect to MongoDB');
        Logger.Err(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;
