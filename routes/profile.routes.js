import express from "express";

export const profileRouter = express.Router()


profileRouter.get("/:id")
profileRouter.put("/:id")
profileRouter.delete("/:id")
