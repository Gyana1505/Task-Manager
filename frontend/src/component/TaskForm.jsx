import React from 'react'
import { useState } from 'react';

const TaskForm = ({ onCreate }) => {
     const [data, setData] = useState({
        title: "",
        description: "",
        status: "pending",
      })
      const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.title || !data.description) {
      alert("All fields are required");
      return;
    }

    onCreate(data);
    setData({
        title: "",
        description: "",
    })

  };
  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      
      <input
        type="text"
        placeholder="Task title"
        value={data.title}
        onChange={(e) => setData({...data,title:e.target.value})}
        className="p-2 border rounded-lg outline-none"
      />

      <textarea
        placeholder="Task description"
        value={data.description}
        onChange={(e) => setData({...data,description:e.target.value})}
        className="p-2 border rounded-lg outline-none"
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskForm