import express from "express";

const PORT = 3001

const app = express()


// MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
  console.log({
    METHOD: req.method,
    URL: req.url
  })
  next()
})


let todos = [{
  id: 1,
  title: "something",
  date: "2024-10-15T10:19:00.421Z"
}]

//GET ALL TODOS
app.get("/todo", (req, res) => {
  res.send(todos)
})


//GET ONE TODOS with :id
app.get("/todo/:id", (req, res) => {
  const id = Number(req.params.id)

  const todo = todos.find(todo => todo.id === id)
  if (todo == undefined) {
    return res.send(`Bu id: ${id} li todo topilmadi :) \n Qaytadan harakat qiling`)
  }
  res.send(todo)
})


// CREATE TODO
app.post("/todo", (req, res) => {
  const body = req.body
  if (!body.title) {
    res.status(400).send({ message: "Title must have" })
  }
  const id = todos.length + 1
  const todo = { ...body, id }
  todos.push(todo)
  res.status(201).send({ ...todo, message: "OK" })
})



// Update  TODO 
app.put("/todo/:id", (req, res) => {
  const body = req.body
  const id = parseInt(req.params.id)
  if (!body.title) {
    res.status(400).send({ message: "Title must have" })
  }
  let check = false
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i]
    if (todo.id === id) {
      check = true
      todos[i].title = body.title
      break
    }
  }
  if (!check) {
    return res.send(`Bu id: ${id} li todo topilmadi :) \n Qaytadan harakat qiling`)
  }

  res.status(201).send({ message: "UPDATED" })

})


app.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`)
})