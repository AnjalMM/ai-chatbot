/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import { Verify } from './pages/Verify'
import Login from './pages/Login'
import { UserData } from './context/UserContext'


export default function App() {
  const {user} = UserData()
  console.log(user);
  
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/verify' element={<Verify/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}
