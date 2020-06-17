import AppServer from './AppServer';

// Start the server or run tests
if (process.argv[2] !== 'test') {
    const server = new AppServer();
    server.start(5000);
} else {
}
