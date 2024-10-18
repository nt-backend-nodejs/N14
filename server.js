import express from "express";
import dotenv from 'dotenv';
import { authRouter, debtRouter, profileRouter } from "./routes/index.js";

dotenv.config()

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use("/auth", authRouter)
app.use("/profile", profileRouter)
app.use("/debt", debtRouter)

app.use((err, req, res, next) => {
  if (err)
    res.status(400).send({ message: err.message })

  res.status(404).send({ message: "Not found" })
})

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`)
})
