const { Pool } = require('pg');

require("dotenv").config(); 

const pool = new Pool( {
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
});

pool.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = pool;
