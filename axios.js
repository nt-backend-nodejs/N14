import axios from "axios"
import { readFile } from "node:fs";
import { join } from "node:path";

const URL = "http://localhost:3001/todo"


const getData = (URL) => {
  axios
    .get(URL)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
}

const createUser = (data, URL) => {
  axios
    .post(URL, data)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e.message)
    })
}

// readFile(join(import.meta.dirname, "user.json"), "utf8", (err, data) => {
//   if (err)
//     throw new Error("XATOLIK");

//   createUser(data, URL)
// })
getData(URL)
