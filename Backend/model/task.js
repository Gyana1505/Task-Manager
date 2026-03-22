import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    require:true
  },
  description: {
    type:String,
    require:true
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export const Task = mongoose.model("Task", taskSchema);