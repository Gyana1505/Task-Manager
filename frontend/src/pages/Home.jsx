import React from 'react'

const Home = () => {
  return (
      <div className="min-h-[90vh] flex flex-col justify-center items-center bg-linear-to-br from-indigo-500 to-purple-600 px-6">
      
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center max-w-2xl">
        
        <h1 className="text-white text-5xl font-extrabold mb-4">
          Task Manager
        </h1>

        <p className="text-gray-200 text-lg mb-6">
          Organize your work. Boost your productivity. Achieve your goals.
        </p>

        {/* Quotes Section */}
        <div className="space-y-4 text-gray-100 text-sm italic">
          <p>“The secret of getting ahead is getting started.”</p>
          <p>“Small steps every day lead to big achievements.”</p>
          <p>“Focus on being productive instead of busy.”</p>
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-white mx-auto my-6 rounded"></div>

        <p className="text-gray-300 text-sm">
          Plan your day, track your progress, and stay in control of your tasks.
        </p>
      </div>

    </div>
  )
}

export default Home