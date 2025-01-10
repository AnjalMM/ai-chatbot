/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { GiHamburgerMenu } from "react-icons/gi";
import Header from '../components/Header';

export default function Home() {

  const [isOpen,setIsOpen] = useState(false)

  const toggleSidebar =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='flex h-screen bg-gray-500 text-white'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>

     <div className='flex flex-1 flex-col'>
      <button onClick={toggleSidebar} className='md:hidden p-4 bg-gray-800 text-2xl'>
         <GiHamburgerMenu/>
      </button>
      <div className='flex-1 p-6 mb-20 md:mb-0'>
       <Header/>
      </div>

     </div>

    </div>
  )
}
