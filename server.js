import express from "express";

const app = express()

app.use(express.json())
app.use(express.static('public'))



let users = [
  { id: 1, name: "Jumali" },
  { id: 2, name: "Idris" },
  { id: 3, name: "Ali" },
]

// app.use((req, res, next) => {
//   console.log(`LAYER1 METHOD: ${req.method}`)
//   console.log(`LAYER1 URL: ${req.url}`)
//   next()
// })



// app.get("/", (req, res, next) => {

//   console.log(`LAYER2 METHOD: ${req.method}`)
//   console.log(`LAYER2 URL: ${req.url}`)

//   next()
//   // res.send("HELLO")
// })


app.get("/", (req, res, next) => {
  const query = req.query

  // res.

  // res.status(400)
  // res.status(201).send(query)
  // res.type('application/json')

  // res.set('Content-Type', 'application/json')

  // res.json(query)

  // res.sendFile('/home/khamidullo/Pictures/image.png')
  res.sendFile('/home/khamidullo/najot-talim/n-14/index.html')

})


app.get("/user", (req, res) => {
  res.send(users)
})

app.post("/user", (req, res) => {
  const body = req.body
  users.push({ ...body, id: users.length })
  return res.send("OK")
})








app.put("/user/:id", (req, res) => {
  const body = req.body
  const params = req.params

  users.forEach(user => {
    if (user.id === +params.id) {
      user.name = body.name
    }
  })
  return res.send(users)
})

app.delete("/user/:userId", (req, res) => {
  const id = req.params.userId
  const newUsers = users.filter(user => user.id !== +id)
  users = newUsers
  res.send(newUsers)
})

app.listen(3001, () => {
  console.log("Server running on port 3001")
})
