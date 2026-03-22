import axios from "axios";
import { useState, useEffect, createContext, useContext, Children } from "react"
import { instance } from "./instance";

const TaskContexts = createContext()
export const TaskContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState([]);

    const getAllTask = async () => {
        try {
            const res = await instance.get("/task/alltask");
            setTask(res.data)
        } catch (error) {
            console.log("error is", error)
        } finally {
            setLoading(false);
        }
    }
    const addTask = async (data) => {
        console.log(data)
        try {
            const res = await instance.post("/task/add", data, {
                withCredentials: true,
            });
            setTask((prev) => [res.data, ...prev]);
        } catch (error) {
            console.log(error)
        }
    }
    const updateTask = async (data) => {
        const updatedStatus = data.status === "pending" ? "completed" : "pending";
        const res = await instance.put(`/task/update/${data._id}`, { status: updatedStatus }, {
            withCredentials: true,
        });
        setTask((prev) =>
            prev.map((task) =>
                task._id === data._id
                    ? { ...task, status: updatedStatus }
                    : task
            )
        );

    }
    const deleteTask = async (id) => {
        const res = await instance.delete(`/task/delete/${id}`, {
            withCredentials: true,
        });
        setTask((prev) => prev.filter((task) => task._id !== id));
    }
    return (
        <TaskContexts.Provider
            value={{
                loading,
                task,
                setTask,
                getAllTask,
                addTask,
                updateTask,
                deleteTask
            }}
        >
            {children}
        </TaskContexts.Provider>
    )
}

export const useTask = () => useContext(TaskContexts)