/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from './pages/Home'
import { Verify } from './pages/Verify'
import {Login} from './pages/Login'
import { UserData } from './context/UserContext'
import { LoadingBig } from './components/Loading'






export default function App() {
  const {user,isAuth,loading} = UserData()
  return (
    <div>
     {loading?(<LoadingBig/>):(<BrowserRouter>
     <Routes>
      <Route path='/' element={isAuth?<Home/>:<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/verify' element={<Verify/>}/>
     </Routes>
     </BrowserRouter>)}
    </div>
    // hello
      //  newpush
      // newone
      // newwwwww
      // newemail
  )
}
