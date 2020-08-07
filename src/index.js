import express from 'express';
import Server from './server';
import config from './config';

import loadAppSetup from './loaders';
import db from './db';

const app = express();

loadAppSetup({ app });

const appServer = new Server({ app, port: config.port });

appServer.start();

process.on('exit', () => {
	db.end();
});
