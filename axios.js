import axios from "axios"
import { readFile } from "node:fs";
import { join } from "node:path";

const URL = "http://localhost:3001/todos"


const getAllTodos = (URL) => {
  axios
    .get(URL)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
}


const getById = (URL, id) => {
  axios
    .get(`${URL}/${id}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
}



const updateById = (URL, id, data) => {
  axios
    .put(`${URL}/${id}`, data)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
}



const updateByIdWithPatch = (URL, id, data) => {
  axios
    .patch(`${URL}/${id}`, data)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
}



const deleteById = (URL, id) => {
  axios
    .delete(`${URL}/${id}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
}


const createTodo = (URL, data) => {
  axios
    .post(URL, data)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => {
      console.log(e.message)
    })
}


// getById(URL, 2)
// deleteById(URL, 2)
updateById(URL, 2, { title: "new leetcode number 34" })

setTimeout(() => {
  getAllTodos(URL)
}, 2000)


// readFile(join(import.meta.dirname, "user.json"), "utf8", (err, data) => {
//   if (err)
//     throw new Error("XATOLIK");

//   createUser(data, URL)
// })
// getData(URL)
