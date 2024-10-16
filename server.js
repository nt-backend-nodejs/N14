import express from "express";
import userRouter from "./routes/user.router.js"
import productsRouter from "./routes/products.router.js"


const app = express()


app.use("/users", userRouter)
app.use("/products", productsRouter)


app.listen(3000, () => {
  console.log(3000)
})