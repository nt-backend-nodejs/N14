import express from "express";
import { deleteUserController, getUserController, loginController, registerController, updateUserController } from "../controllers/auth.controller.js"
import { registerValidationMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router()

router.post("/register", registerValidationMiddleware, registerController)

router.post("/login", registerValidationMiddleware, loginController)

router.put("/:id", updateUserController)

router.get("/:id", getUserController)

router.delete("/:id", deleteUserController)


export default router
