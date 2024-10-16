
import express from "express";


const router = express.Router()

router.get("/", (req, res) => {
  res.send("Products ")
})


router.post("/", (req, res) => {
  res.send("Products ")
})


router.put("/:id", (req, res) => {
  res.send("Products ")
})


router.delete("/:id", (req, res) => {
  res.send("Products ")
})


export default router
