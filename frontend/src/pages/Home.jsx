/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { GiHamburgerMenu } from "react-icons/gi";
import Header from '../components/Header';
import { ChatData } from '../context/chatContext';
import { CgProfile } from "react-icons/cg"
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from '../components/Loading';
import { IoMdSend } from "react-icons/io";

export  function Home() {

  const [isOpen,setIsOpen] = useState(false)

  const toggleSidebar =()=>{
    setIsOpen(!isOpen)
  }

  const {fetchResponse,messages,prompt,setPrompt,newRequestloading,loading} = ChatData()

  const submitHandler =(e)=>{
    e.preventDefault()
    fetchResponse()
  }

  const messagecontainerRef = useRef()

  useEffect(()=>{
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    
  },[messages])
  return (
    <div className='h-screen'>
          <div className='flex h-screen bg-gray-500 text-white'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>

     <div className='flex flex-1 flex-col'>
      <button onClick={toggleSidebar} className='md:hidden p-4 bg-gray-800 text-2xl'>
         <GiHamburgerMenu/>
      </button>
      <div className='flex-1 p-6 mb-20 md:mb-0'>
       <Header/>

       {loading ? (<LoadingBig/>):(
        <div className='p-6 max-h-[530px] overflow-auto 
         thin-scrollbar23 ' ref={messagecontainerRef}>
         {
           messages && messages.length>0? (messages.map((e,i)=>(
             <div key={i}>
               <div className='mb-4 p-4 rounded bg-blue-700 text-white'>
                 <div className='bg-white p-2 rounded-full text-black text-2xl h-10'>
                    <CgProfile/>
                 </div>
 
                  {e.question}
 
               </div>
               <div className='mb-4 p-4 rounded bg-gray-700 text-white'>
               <div className='bg-white p-2 rounded-full text-black text-2xl h-10'>
                    <FaRobot/>
                    
                 </div>
                
                  
                   <p dangerouslySetInnerHTML={{__html:e.answer}}></p>
                  
                  
                
               </div>
             </div>
           ))): (<p>no chat yet</p>)
         }
 
         {newRequestloading && <LoadingSmall/>}
        </div>
       )}
       <div className='fixed bottom-1   p-1 bg-gray-500 w-full 
      md:w-[70%]'>
        <form action="" className='flex ' onSubmit={submitHandler}>
          <input 
          className='flex-grow pr-1 p-4 bg-gray-700 rounded text-white outline-none'
           type="text" placeholder='enter a promt here' value={prompt} onChange={e=>{setPrompt(e.target.value)}} 
          required />
          <button className='p-4 bg-gray-700 rounded-r text-2xl text-white'><IoMdSend/></button>
        </form>
      </div>
      </div>

     </div>
     
    </div>
    </div>
   
  )
}
