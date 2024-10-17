import express from "express";
import { deleteUserController, getUserController, loginController, registerController, updateUserController, testController } from "../controllers/auth.controller.js"
import { registerValidationMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router()

router.post("/register", registerValidationMiddleware, registerController)

router.post("/login", registerValidationMiddleware, loginController)

router.post("/test", testController)

router.put("/:id", updateUserController)

router.get("/me/:id", getUserController)

router.delete("/:id", deleteUserController)


export default router
