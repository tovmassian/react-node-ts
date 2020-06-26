// process environmental variables
import * as dotEnv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
    dotEnv.config();
}
