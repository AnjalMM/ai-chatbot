/* eslint-disable no-unused-vars */
import React from 'react'
import { ChatData } from '../context/chatContext'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

    const {chats}=ChatData()
  return (

    
 <div className='relative top-[1px]'>
    <div className=" p-4 bg-white text-white">
    {/* Profile Icon (Top Right) */}
    <FaUserCircle
      className="absolute top-4 right-4 text-3xl text-gray-600 cursor-pointer hover:text-gray-300 transition"
      onClick={() => navigate("/profile")}
    />

    <p className="text-lg text-gray-700">Hello, how can I help you?</p>
    {chats && chats.length === 0 && (
      <p className="text-md text-gray-700 mt-5">Create new chat to continue...</p>
    )}
  </div>
 </div>

   
    
  )
}

export default Header