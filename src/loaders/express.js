import bodyParser from 'body-parser';
import compression from 'compression';
import methodOverride from 'method-override';

import api from '../api';

export default function (app) {
	app.use(bodyParser.json());
	app.use(compression());
	app.use(methodOverride('X-HTTP-Method-Override'));

	app.use('/api', api);

	app.use('*', (req, res) => {
		res.json({ data: 'Route not found' });
	});
}
