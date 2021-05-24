import { Pool } from 'pg';
import * as constants from '../utility/constants';

const pool = new Pool({
    user: constants.DB_USERNAME,
    password: constants.DB_PASSWORD,
    database: constants.DB_DBNAME,
    host: constants.DB_HOST,
    port: constants.DB_PORT
});

export default pool;