const {Pool} =require('pg');

const pool  = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'task-Data',
    password: 'nimra',
    port: 5432
});

module.exports = pool;