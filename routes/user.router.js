import express from "express";
import { createUserController, deleteUserController, getUsersController, updateUserController } from "../controllers/user.controller.js"
import { userLoggerMiddleware } from '../middlewares/user.logger.middleware.js';

const router = express.Router()

router.get("/", userLoggerMiddleware, getUsersController)

router.get("/all", getUsersController)

router.post("/", createUserController)

router.put("/:id", updateUserController)

router.delete("/:id", deleteUserController)


export default router
