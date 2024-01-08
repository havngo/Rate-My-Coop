import {Pool} from 'pg';
import { Coop, DbTable, User } from './types';
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
      console.log(`result is ${result.rows}`)
    } catch (e) {
      console.log(`Database: Failed to create an user ${email}`)
    }
  }

  async createCoop(coop: Coop) {
    const {company, position, rating, review} = coop;
    const {overall, workImpact, location, compensation, culture} = rating;
    try {
      const result = await this.pool.query(
        "INSERT INTO coops (company, position, review, rating) VALUES ($1, $2, $3, ($4, $5, $6, $7, $8)) RETURNING *", 
        [company, position, review, overall, workImpact, location, compensation, culture]
      )
      console.log(`result is ${result.rows}`)
    } catch (e) {
      console.log(`Database: Failed to create a coop ${coop}`)
    }
  }

}

export const db = new Db();