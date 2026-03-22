import { User } from "../model/user.js";
import TryCatch from "../utills/tryCatch.js";
import jwt from "jsonwebtoken"

export const register=TryCatch(async(req,res)=>{
        const { name,email, password } = req.body;
   
 if (!name || !email || !password) {
       return res.status(400).json({message:"All field are required"})
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password
    });
    
     const token= jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:"7d"
     })

  const isProd = process.env.NODE_ENV === "production";
     res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
       sameSite: isProd ? "none" : "lax",
  secure: isProd,
     })

    res.status(201).json({ message: "User registered" });
})

export const login=TryCatch(async(req,res)=>{

    const { email, password } = req.body;
     if (!email || !password) {
       return res.status(400).json({message:"All field are required"})
    }
     const existingUser=await User.findOne({email})
     if(!existingUser){
         return res.status(400).json({ message: "User not present" });
     }
     const isPasswordCorrect=await existingUser.matchPassword(password)
    if (!isPasswordCorrect) {
        return res.status(400).json({message:"Wrong password"})
    }
    const token= jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_KEY,{
        expiresIn:"7d"
     })
     const isProd = process.env.NODE_ENV === "production";
     res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
       sameSite: isProd ? "none" : "lax",
  secure: isProd,
     })
     res.status(200).json({existingUser})
})

export const logout=(req,res)=>{
   console.log("enter in log out")
   res.clearCookie("jwt");
   res.status(200).json({ success:true,message:"Logout successful"})
}