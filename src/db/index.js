import { Pool } from 'pg';

import config from '../config';

const db = new Pool({ connectionString: config.db.url });

export default db;
