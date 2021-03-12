import dotenv from 'dotenv';
dotenv.config();
import {createPool} from 'mysql2/promise';

export const connect = _ => {

    return createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 10
    })
    
}