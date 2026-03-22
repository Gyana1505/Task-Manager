#  Task Manager Application

A full-stack Task Manager web application built using the MERN stack. Users can register, login, and manage their daily tasks efficiently.



##  Features

-  User Authentication (Register & Login)
-  Add new tasks
-  Update task status (Pending / Completed)
-  Delete tasks
-  Search tasks by title
-  Filter tasks by status
-  Optimized state updates (no unnecessary API calls)
-  Responsive UI with animations



##  Architecture

This project follows a **client-server architecture**:

###  Frontend (React)
- Built using React (Vite)
- Uses Context API for state management
- Components:
  - Navbar
  - Dashboard
  - TaskForm
  - Card (Task UI)
- Handles UI, state, and API calls

###  Backend (Node.js + Express)
- REST API built with Express.js
- Handles:
  - Authentication
  - Task CRUD operations

###  Database (MongoDB)
- Stores:
  - Users
  - Tasks (linked with userId)

##  Folder Structure

frontend/
├── components/
├── pages/
├── api/
├── App.jsx

backend/
├── controllers/
├── models/
├── routes/
├── middleware/

##  Setup Instructions

###  1. Clone the repository


git clone https://github.com/Gyana1505/task-manager.git
cd task-manager

###  2. Setup Backend

cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
# Run server:
npm run dev

# 3. Setup Frontend
cd frontend
npm install
npm run dev

# API Endpoints
# Auth
POST /user/register
POST /user/login
GET /user/me
GET /user/logout
# Tasks
GET /task/alltask
POST /task/add
PUT /task/update/:id
DELETE /task/delete/:id



# Sample API Request/Response Documentation

###  1. Register User

**POST** `/user/register`

####  Request Body
json
{
  "name": "Gyana",
  "email": "gyana@gmail.com",
  "password": "123456"
}
 # Response
{
  "message": "User registered successfully",
  "user": {
    "_id": "123abc",
    "name": "Gyana",
    "email": "gyana@gmail.com"
  }
}