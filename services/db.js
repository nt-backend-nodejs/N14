import fs from "node:fs";
import path from "node:path";
const dbFilePath = path.join(import.meta.dirname, "..", "database", "users.json")
export const readUsersDB = async () => {
  const data = await fs.readFileSync(dbFilePath, "utf8")


  const users = JSON.parse(data)

  return users
}


export const writeUsersDB = (users) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(users))
}
