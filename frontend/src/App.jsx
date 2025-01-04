/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import { Verify } from './pages/Verify'

export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/verify' element={<Verify/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}
