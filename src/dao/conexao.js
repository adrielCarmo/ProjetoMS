const { Pool } = require('pg');

/*
    - CONEXÃO LOCAL - VIA POOL DE CONEXÕES:
*/
const pool = new Pool({
    user: 'user-dw2-2021-01',
    host: 'localhost',
    database: 'dw2-2021-01',
    password: 'user-dw2-2021-01',
    port: 5432
})

/*
    - CONEXÃO HEROKU - VIA POOL DE CONEXÕES:

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

*/
module.exports = pool;