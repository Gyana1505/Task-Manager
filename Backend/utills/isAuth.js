import { User } from "../model/user.js";
import jwt from "jsonwebtoken"
export const isAuth=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt; 
        if(!token)
        return res.status(403).json({
            message:"Unauthorize",
        })
        const decodedData=jwt.verify(token,process.env.JWT_SECRET_KEY)
        
        req.user=await User.findById(decodedData.userId).select("-password")
        if (!req.user) {
             return res.status(403).json({
            message:"Unauthorize",
        })
        }
        next()
    } catch (error) {
        res.status(500).json({
            message:"Server error"
        })
    }
} 