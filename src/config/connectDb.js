import mysql from 'mysql2/promise';

const pool  = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodejs_basic',
    password:''
});

export default pool;