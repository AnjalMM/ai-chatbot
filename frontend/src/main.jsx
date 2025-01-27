import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Toaster}from "react-hot-toast"
import { UserProvider } from './context/UserContext.jsx'
import { ChatProvider } from './context/chatContext.jsx'

export const server = 'http://localhost:5000'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ChatProvider>
      <App />
      <Toaster/>
      </ChatProvider>
   </UserProvider>
   </StrictMode>
)
// hai bhavana