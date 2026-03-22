import express from "express"
import { isAuth } from "../utills/isAuth.js"
import { createTask, deletTask, getAllTask, updateTask } from "../controller/task.controller.js"
const router=express.Router()
router.post("/add",isAuth,createTask)
router.get("/alltask",isAuth,getAllTask)
router.delete("/delete/:id",isAuth,deletTask)
router.put("/update/:id",isAuth,updateTask)
export default router