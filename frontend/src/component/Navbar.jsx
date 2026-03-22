import React from 'react'
import { allData } from '../api/UserContext'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {
     const { user,logout } = allData()
     const handleLogout = async () => {
  await logout();
};
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Task Manager</h1>

      <div className="flex items-center gap-4">
        { !user?.user?.name ? (
          <>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600">
              Login
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-indigo-600">
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-700 font-medium">
              👋 {user.user.name}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar