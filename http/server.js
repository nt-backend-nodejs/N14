import { v4 as uuidv4 } from 'uuid';
import http from "node:http"
import fs from "node:fs"
import path from "node:path"


const readFile = (path) => {
  const json = fs.readFileSync(path, 'utf8')
  const data = JSON.parse(json)

  return data
}

const writeFile = (path, data) => {
  const json = JSON.stringify(data)
  fs.writeFileSync(path, json)
}

const jsonFilePath = path.join(import.meta.dirname, '..', "todos", "data.json")

const server = http.createServer((req, res) => {
  console.log({ METHOD: req.method })
  console.log({ URL: req.url })

  let params = ""
  if (req.url?.split("?").length >= 2) {
    params = req.url?.split("?")[1]
    req.url = req.url?.split("?")[0]
    console.log(({
      params,
      URL: req.url
    }))
  }


  if (req.method === "POST" && req.url === "/todo") {
    let body = []


    req.on("data", (chunk) => {
      body.push(chunk.toString())
    })

    req.on("end", () => {
      const data = JSON.parse(body)

      const todos = readFile(jsonFilePath)

      const todo = {
        id: uuidv4(),
        isDone: false,
        date: new Date(),
        ...data
      }

      todos.push(todo)
      writeFile(jsonFilePath, todos)

      res.writeHead(201, { "Content-Type": "application/json" })
      res.write(JSON.stringify(todo))
      res.end()
    })
  } else if (req.method === "GET" && req.url === "/todo") {
    const todos = readFile(jsonFilePath)

    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify(todos))
    res.end()
  } else if (req.method === "PUT" && req.url === "/todo") {
    const id = params.split("=")[1]


    let body = []


    req.on("data", (chunk) => {
      body.push(chunk.toString())
    })

    req.on("end", () => {
      const data = JSON.parse(body)

      const todos = readFile(jsonFilePath)

      for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.id === id) {
          const newTodo = {
            ...todo,
            ...data,
            date: new Date(),
          }
          console.log({ todo });
          console.log({ newTodo });

          writeFile(jsonFilePath, todos)
          break
        }
      }


      res.writeHead(201, { "Content-Type": "application/json" })
      res.write(JSON.stringify(todos))
      res.end()
    })
  } else if (req.method === "DELETE" && req.url === "/todo") {
    const id = params.split("=")[1]

    const todos = readFile(jsonFilePath)

    const newTodos = todos.filter(todo => todo.id !== id)
    writeFile(jsonFilePath, newTodos)

    res.writeHead(201, { "Content-Type": "application/json" })
    res.write(JSON.stringify(newTodos))
    res.end()
  }


  // console.log(import.meta)

  // if (req.url === "/") {
  //   const htmlFilePath = path.join(import.meta.dirname, "..", "static", "index.html")
  //   const htmlData = readFile(htmlFilePath)
  //   res.writeHead(200, { "Content-Type": "text/html" })

  //   res.write(htmlData)
  //   res.end()
  //   return
  // } else if (req.url === "/style.css") {
  //   const htmlFilePath = path.join(import.meta.dirname, "..", "static", req.url)

  //   const htmlData = readFile(htmlFilePath)

  //   res.writeHead(200, { "Content-Type": "text/css" })

  //   res.write(htmlData)
  //   res.end()
  //   return
  // }


  // const htmlFilePath = path.join(import.meta.dirname, "..", "static", "index.html")
  // const htmlData = readFile(htmlFilePath)

  // res.write(htmlData)
  // res.end()

})


server.listen(3000, () => {
  // console.log(server)
  console.log(`Server is running on port ${3000}`)
})
