import express from "express";
import userRouter from "./routes/user.router.js"
import productsRouter from "./routes/product.router.js"

import authRouter from "./routes/auth.router.js"


const app = express()
app.use(express.json())

// app.use(loggerMiddleware)


//AUTH
app.use("/auth", authRouter)


// app.use("/users", userRouter)
// app.use("/products", productsRouter)

//ERROR MIDDLEWARE
app.use((err, req, res, next) => {
  const { message, name, stack } = err

  res.status(400).send({ message, name, stack })
})


app.listen(3000, () => {
  console.log(3000)
})