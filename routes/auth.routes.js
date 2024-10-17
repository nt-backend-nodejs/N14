import express from "express";

export const authRouter = express.Router()


authRouter.post("/register")
authRouter.post("/login")
authRouter.post("/logout")
