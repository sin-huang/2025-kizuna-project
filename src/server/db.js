import {Pool} from 'pg';

const pool  = new Pool({
    user: 'kizuna_user',
    host: 'localhost',
    database: 'kizuna_database',
    password: '1234',
    port: '5432'
});

export default pool;