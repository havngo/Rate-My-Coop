import * as express from "express"
import { db } from "./dbModel"
import { DbTable } from "./types"

import * as dotenv from "dotenv";

dotenv.config()
const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers"
    );
    next();
  });

app.get('/', (_: any, res: any) => {
    res.send('Welcome!~')
})
app.get('/api/users', async (_: any, res: any) => {
    const response = await db.getAll(DbTable.USER);
    res.status(200).send(response);
})

app.get('/api/coops', async (_: any, res: any) => {
    const response = await db.getAll(DbTable.COOP);
    res.status(200).send(response);
})

app.post('api/users', async (req: any, res: any) => {
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))