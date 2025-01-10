/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function Home() {

  const [isOpen,setIsOpen] = useState(false)

  const toggleSidebar =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='flex h-screen bg-gray-500 text-white'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    </div>
  )
}
