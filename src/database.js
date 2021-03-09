import mysql from 'mysql';
import { dev, production } from '../config';
import {promisify} from 'util';

const pool = mysql.createPool({
    host: production.host || dev.host,
    user: production.user || dev.user,
    password: production.password || dev.password,
    database: production.password || dev.database
})
//editar
pool.getConnection((err, connection) => {
    if(err) return console.log(err);

    connection.release();
    console.log('DB is running in id: ', connection.threadId);
    return;
})

pool.query = promisify(pool.query);

export default pool;
