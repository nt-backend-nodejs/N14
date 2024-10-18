import express from "express";
import { loginController, logoutController, registerController } from '../controllers/index.js';
import { loginMiddleware, registerMiddleware } from '../middleware/index.js'

export const authRouter = express.Router()


authRouter.post("/register", registerMiddleware, registerController)
authRouter.post("/login", loginMiddleware, loginController)
authRouter.post("/logout", logoutController)
