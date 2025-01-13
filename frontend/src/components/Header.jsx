/* eslint-disable no-unused-vars */
import React from 'react'
import { ChatData } from '../context/chatContext'

const Header = () => {
    const {chats}=ChatData()
  return (
    <div>
        <p className='text-lg mb-6'>Hello, how can i help you ?</p>
         {chats && chats.length === 0 && (<p className='text-lg mb-6'>Create new chat to continue</p> )}
    </div>
  )
}

export default Header