import express from "express"
import { login, logout, register } from "../controller/user.controller.js"
import { isAuth } from "../utills/isAuth.js"
const router=express.Router()
router.post("/login",login)
router.post("/register",register)
router.get("/me",isAuth,(req,res)=>{
    res.status(200).json({user:req.user})
})
router.post("/logout",logout)
export default router