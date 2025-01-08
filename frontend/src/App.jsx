/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import { Verify } from './pages/Verify'
import Login from './pages/Login'


export default function App() {
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
