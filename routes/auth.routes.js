import express from "express";
import { loginController, logoutController, registerController } from '../controllers/index.js';

export const authRouter = express.Router()


authRouter.post("/register", registerController)
authRouter.post("/login", loginController)
authRouter.post("/logout", logoutController)
