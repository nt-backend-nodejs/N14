
import express from "express";


const router = express.Router()

router.get("/", (req, res) => {
  res.send("users ")
})


router.post("/", (req, res) => {
  res.send("users ")
})


router.put("/:id", (req, res) => {
  res.send("users ")
})


router.delete("/:id", (req, res) => {
  res.send("users ")
})


export default router
