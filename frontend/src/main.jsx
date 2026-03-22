import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './api/UserContext.jsx'
import { TaskContextProvider } from './api/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </UserContextProvider>
    
  </StrictMode>,
)
