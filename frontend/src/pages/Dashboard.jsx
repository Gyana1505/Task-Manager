import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import TaskForm from '../component/TaskForm';
import Card from '../component/Card'
import { useTask } from '../api/TaskContext';
const CardWrap = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      {children}
    </div>
  );
};
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const { addTask, getAllTask, task, updateTask, deleteTask } = useTask()
 
 const filteredTasks = task.filter((t) => {
  const matchesSearch =
    t.title.toLowerCase().includes(search.toLowerCase())
  const matchesStatus =
    statusFilter === "all" || t.status === statusFilter;

  return matchesSearch && matchesStatus;
});

  useEffect(() => {
    const getTask = async () => {
      await getAllTask()
    }
    getTask()
  }, []);
  useEffect(() => {
    console.log(task)
  }, [task])

  const createTask = async (data) => {
    await addTask(data)
  };

  const deleteUserTask = async (id) => {

    await deleteTask(id)
  };

  const toggleStatus = async (task) => {
    console.log("hiii")
    await updateTask(task)
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 to-purple-600 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white text-center mb-6"
      >
        Task Manager Dashboard 🚀
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        
        <CardWrap>
         <div className="flex flex-col gap-3">

    
    <input
      className="w-full p-2 border rounded-lg outline-none"
      placeholder="🔍 Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

   
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => setStatusFilter("all")}
        className={`px-3 py-1 rounded-lg ${
          statusFilter === "all"
            ? "bg-indigo-600 text-white"
            : "bg-gray-200"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setStatusFilter("pending")}
        className={`px-3 py-1 rounded-lg ${
          statusFilter === "pending"
            ? "bg-yellow-400 text-white"
            : "bg-yellow-200"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setStatusFilter("completed")}
        className={`px-3 py-1 rounded-lg ${
          statusFilter === "completed"
            ? "bg-green-500 text-white"
            : "bg-green-200"
        }`}
      >
        Completed
      </button>
    </div>

  </div>
        </CardWrap>
        
        <div className="h-4" />

       
        <motion.button
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-indigo-600 px-4 py-2 rounded-xl shadow-md font-semibold"
        >
          {showForm ? "Close" : "+ Add Task"}
        </motion.button>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <CardWrap>
              <TaskForm onCreate={createTask} />
            </CardWrap>
          </motion.div>
        )}

        <div className="grid gap-4 mt-6">
          {filteredTasks.length === 0 ? (
            <p className="text-white text-center">No tasks found</p>
          ) : (
            filteredTasks.map((task) => (
              <motion.div
                key={task._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Card key={task._id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  createdAt={task.createdAt}
                  onToggle={() => toggleStatus(task)}
                  onDelete={() => deleteUserTask(task._id)}
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard