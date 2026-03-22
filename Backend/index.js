import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDb } from "./config/db.js"
dotenv.config()
const app=express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
     origin: "http://localhost:5173",
    credentials: true
}))
const port=process.env.PORT
import userRouter from './route/auth.js'
import taskRouter from "./route/task.js"
app.use("/api/user",userRouter)
app.use("/api/task",taskRouter)

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error(" DB connection failed:", err);
});