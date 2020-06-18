import AppServer from './AppServer';
import { Logger } from '@overnightjs/logger';

// Start the server or run tests
if (process.env.NODE_ENV !== 'test') {
    const server = new AppServer();
    server.start(process.env.NODE_ENV === 'development' ? 5000 : 8000);
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
