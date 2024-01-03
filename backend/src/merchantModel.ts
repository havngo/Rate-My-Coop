import {Pool} from 'pg';

const pool = new Pool({
  user: process.env.USER || 'my_user',
  host: process.env.HOST || 'localhost',
  database: process.env.DB || 'rate-my-coops',
  password: process.env.PASSWORD || 'root',
  port: Number(process.env.DB_PORT) || 5432,
});