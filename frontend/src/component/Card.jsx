import React from 'react'

const Card = ({ title, description, status, onToggle, onDelete, createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleString();
  return (
    <div className="bg-white p-2 rounded-xl shadow-md flex justify-between items-center">

      {/* Left Side */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-xs text-gray-400 mt-1">
          Created: {formattedDate}
        </p>

       
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-2 flex-col">
       <div className=' flex gap-2'>
         <button
          onClick={onToggle}
          className="px-3 py-1 border rounded-lg hover:bg-gray-100"
        >
          Toggle
        </button>

        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
       </div>
         <span
          className={`text-xs px-2 py-1 rounded-full ${status === "completed"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
            }`}
        >
          {status}
        </span>
      </div>
    </div>
  )
}

export default Card