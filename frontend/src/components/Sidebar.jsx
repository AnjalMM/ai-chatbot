/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IoIosCloseCircle } from "react-icons/io"
import { ChatData } from '../context/chatContext'
import { MdDelete } from "react-icons/md";
import { LoadingSpinner } from './Loading';
import { UserData } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logochat2 from '../assets/logochat2.png'

const Sidebar =({isOpen,toggleSidebar})=> {
    const {chats , createChat,createLod,setselected,deleteChat,messages,setMessages}= ChatData()

    const {logoutHandler}= UserData()

    const navigate = useNavigate()

    const deleteChatHandler =(id)=>{
          if(confirm("are you sure to delete")){
            deleteChat(id)
          }
    }


    // const clickEvent =(id)=>{
    //      setselected(id)
    //      console.log(localStorage.getItem("token"))
    // }
  return (
    <div className={`fixed inset-0 bg-gray-400 p-4 transition-transform transform md:relative md:translate-x-0 md:w-1/4 md:block ${isOpen?"translate-x-0":
      "-translate-x-full"
  }`}>
      <button className="md:hidden p-2 mb-4 bg-gray-700 rounded text-2xl" onClick={toggleSidebar}><IoIosCloseCircle/></button>
      
      <div className="text-2xl text-black font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <span>Neurofy</span>
            <img src={logochat2} alt="ChatBot Logo" className="w-8 h-8" />
        </div>
    <div className="mb-4">
      <button
         onClick={createChat}
        className="w-full py-2 bg-gray-200 text-black hover:bg-gray-300 rounded"
      >
       {createLod?<LoadingSpinner/>:" New Chat +"}
      </button>
    </div>
    <div>
    <p className="text-sm text-black mb-2">Recent</p>
    <div className='max-h-[500px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar'>
      {
          chats && chats.length>0? (chats.map((e,i)=>(
              <button key={i} onClick={() => setselected(e._id) } className='w-full text-left py-2 bg-gray-200 hover:bg-gray-300 rounded mt-2 
              flex justify-between items-center' >
                  <span className='text-black pl-2'>{e.latestMessage.slice(0,38)}...</span>
                  <span className='bg-gray-500 mr-2 text-white text-xl px-3 py-2 rounded-md
       hover:bg-gray-600' onClick={()=>deleteChatHandler(e._id)}><MdDelete/></span>
              </button>
          ))) : (<p> no chat yet</p>)
      }
    </div>
    </div>

    <div className='absolute bottom-6 left-4 flex gap-4'>
      <button className='bg-gray-500 text-white text-xl px-3 py-2 rounded-md hover:bg-gray-600' onClick={() => navigate("/")}>
      <ArrowLeft size={24} />
      </button>
      <button className='bg-gray-500 text-white text-xl px-3 py-2 rounded-md hover:bg-gray-600' onClick={logoutHandler}>
          Log out
      </button>
    </div>
      
 </div>

  )
}




export default Sidebar;