import AppServer from './AppServer';
import { Logger } from '@overnightjs/logger';
import { Environment } from './enums';

// Start the server or run tests
if (process.env.NODE_ENV !== Environment.TEST) {
    const server = new AppServer();
    const PORT = process.env.PORT || 8000;
    server.start(process.env.NODE_ENV === Environment.PRODUCTION ? +PORT : 5000);
} else {
    const Jasmine = require('jasmine');
    const jasmine = new Jasmine();

    jasmine.loadConfig({
        'spec_dir': 'test',
        'spec_files': ['./unit/**/*.test.ts'],
        'stopSpecOnExpectationFailure': false,
        'random': true,
    });

    jasmine.onComplete((passed: boolean) => {
        if (passed) {
            Logger.Info('All tests have passed :)');
        } else {
            Logger.Err('At least one test has failed :(');
        }
    });

    let testPath = process.argv[3];

    if (testPath) {
        testPath = `./src/${testPath}.test.ts`;
        jasmine.execute([testPath]);
    } else {
        jasmine.execute();
    }
}
