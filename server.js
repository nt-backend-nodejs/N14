import express from "express";
import { config } from "dotenv";

config()

const PORT = process.env.PORT
const app = express()


app.use("/products", productsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} http://localhost:${PORT}`)
})
