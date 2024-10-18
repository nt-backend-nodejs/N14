import express from "express";
import { validationProductMidd } from '../middlewares/index.js';


export const productsRouter = express.Router()


//GET ALL
productsRouter.get("/")

//GET BY ID
productsRouter.get("/")

//CREATE
productsRouter.post("/", validationProductMidd)

//UPDATE BY ID
productsRouter.put("/:id")

//DELETE BY ID
productsRouter.delete("/:id")




// export const productsRouter = 
