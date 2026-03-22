import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { allData } from '../api/UserContext';

const Register = () => {
    const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);
  const {registerUser}=allData()
  const handleRegister = async (e) => {
    e.preventDefault();
      await registerUser(data);
  
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
  <div className="w-\[30rem\] bg-white p-10 rounded-xl shadow-lg text-center">
    
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      Create Account
    </h2>

    <p className="text-sm text-gray-500 mb-6">
      Start manage your work
    </p>

    <form onSubmit={handleRegister} className="space-y-4">
      
      <input
        type="text"
        placeholder="Full Name"
        required
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-orange-400"
      />

      <input
        type="email"
        placeholder="Email"
        required
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-orange-400"
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-orange-400"
      />

      <button
        type="submit"
        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-medium transition duration-200"
      >
        Register
      </button>
    </form>

    <p className="mt-5 text-sm text-gray-600">
      Already have an account?{" "}
      <Link to="/login" className="text-orange-500 font-medium hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>
  )
}

export default Register