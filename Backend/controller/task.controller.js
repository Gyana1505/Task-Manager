import TryCatch from "../utills/tryCatch.js";
import { Task } from "../model/task.js";
export const createTask=TryCatch(async(req,res)=>{
    const {title,description}=req.body
    const userId=req.user._id
     if (!title || !description) {
       return res.status(400).json({message:"All field are required"})
    }
    if (!userId) {
         return res.status(400).json({message:"you are not authorise to add task"})
    }
     const task = await Task.create({
      title,
      description,
      userId
    });

    res.status(201).json(task);
})

export const getAllTask=TryCatch(async(req,res)=>{
    const query = { userId: req.user.id };
    const tasks = await Task.find(query)
    res.json(tasks);
})

export const updateTask=TryCatch(async(req,res)=>{
      const task = await Task.findById(req.params.id);

    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
})

export const deletTask=TryCatch(async(req,res)=>{
  const task = await Task.findById(req.params.id);

    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted" });
})