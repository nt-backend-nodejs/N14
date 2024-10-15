import { DB } from "./db/index.js";


const db = new DB()


const data = await db.create("ali", "qwer1234", "ali", 33)
const users = await db.getAll()
const user = await db.getOne("ali")

console.log(user);
