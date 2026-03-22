import { useState, useEffect, createContext, useContext } from "react"
import { instance } from "./instance"
const UserContexts = createContext()
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setLoading] = useState(true);
    const loginUser = async (data) => {

        try {
            const res = await instance.post("/user/login", data, {
                withCredentials: true,
            });
            getAuth()
            return res.data;
        } catch (error) {
            setIsAuth(false)
            console.log("error is", error)
        }

    }
    const registerUser = async (data) => {
        console.log(data)
        try {
            const res = await instance.post("/user/register", data, {
                withCredentials: true,
            });
         getAuth()
        } catch (error) {
            setIsAuth(false)
            console.log("error is", error)
        }

    }
    const getAuth = async () => {
        try {
            const res = await instance.get("/user/me");
            setUser(res.data)
            setIsAuth(true)

            console.log("USER DATA:", res.data);

        } catch (error) {
            setIsAuth(false)
            console.log("error is", error)
        } finally {
            setLoading(false);
        }

    }
    const logout=async()=>{
        try {
                const res = await instance.post("/user/logout");
                setIsAuth(false)
                setUser([])
            } catch (error) {
            console.log("error is", error)
            }
    }
    return (
        <UserContexts.Provider
            value={{
                user,
                setUser,
                isAuth,
                setIsAuth,
                loginUser,
                registerUser,
                getAuth,
                loading,
                logout

            }}
        >
            {children}
        </UserContexts.Provider>
    )
}
export const allData = () => useContext(UserContexts)