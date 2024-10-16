import { readFileSync, writeFile } from "node:fs";
import { join } from "node:path";
import { v4 } from "uuid"


const databaseURL = join(import.meta.dirname, "..", "database", "users.json")
export const saveUser = async (userData) => {
  const data = readFileSync(databaseURL, "utf8")

  const users = await JSON.parse(data)

  console.log(users);

  const id = v4()
  let newUserData = { ...userData, id }
  users.push(newUserData)
  await writeFile(databaseURL, JSON.stringify(users), (err) => {
    if (err) {
      throw new Error(err);
    }
  })
  return newUserData
}


export const getUserByEmail = async (email) => {
  const data = readFileSync(databaseURL, "utf8")
  const users = await JSON.parse(data)

  const user = users.find(user => user.email === email)

  if (!user) {
    throw new Error(`Email is not found`)
  }

  return user
}




export const checkPassword = async (user, password) => {

  if (user.password !== password) {
    return false
  }

  return true
}
