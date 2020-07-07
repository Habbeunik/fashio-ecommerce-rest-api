import express from 'express';
import Server from './server';
import config from './config';

import loadAppSetup from './loaders';
import db from './db';

const app = express();

loadAppSetup({ app });

const server = new Server({ app, port: config.port });

process.on('exit', () => {
	db.end();
});

server.start();
