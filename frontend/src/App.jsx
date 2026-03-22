import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import { allData, UserContextProvider } from './api/UserContext';
import Navbar from './component/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)
  const {isAuth,getAuth,loading,user}=allData()
  useEffect(() => {
    const checkAuth = async () => {
         await getAuth()
    };
    checkAuth();
  }, []);
  useEffect(() => {
  console.log("FINAL AUTH:", isAuth);
  
}, [isAuth,user]);

  return (
   
     <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={isAuth?<Dashboard/>:<Home/>}/>
      <Route path='/register' element={isAuth?<Dashboard/>:<Register/>}/>
      <Route path='/login' element={isAuth?<Dashboard/>:<Login/>}/>
       <Route path='/dashboard' element={loading ? ( <p>Loading...</p>) : isAuth ? (<Dashboard />) : (<Login />)}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
