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


app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`)
})