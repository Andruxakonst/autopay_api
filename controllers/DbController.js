const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'compact',
    host: '5.9.110.177',
    database: 'compact',
    password: 'UdPczuqkz0',
    port: 5402,
});

exports.pool = pool;

