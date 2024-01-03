import {Pool} from 'pg';
import { DbTable, User } from './types';
import * as dotenv from "dotenv";

class Db {
  pool: Pool;

  constructor() {
    dotenv.config()
    this.pool = new Pool({
      user: process.env.USER,
      host: process.env.HOST,
      database: process.env.DB,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT)
    });
  }

  async getAll(table: DbTable) {
    try {
      const results = await this.pool.query(`SELECT * FROM ${table}`)
      if (results.rows) {
        return results.rows
      }
    } catch (e) {
      console.log( `Database: Failed to get all from ${table} ${e}`)
    }
  }

  async getOne(table: DbTable, id: string) {

  }

  // TODO: 
  async getUser(email: string) {
    
  }

  async createUser(user: User) {
    const { name, email, password} = user;
    try {
      const result = await this.pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]
      )
    } catch (e) {
      console.log(`Database: Failed to create an user ${email}`)
    }
  }

}

export const db = new Db();