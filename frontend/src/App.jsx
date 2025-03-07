/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from './pages/Home'
import { Verify } from './pages/Verify'
import {Login} from './pages/Login'
import { UserData } from './context/UserContext'
import { LoadingBig } from './components/Loading'
import Landingpage from './pages/Landingpage'
import Signup from './pages/Signup'
import {ProfilePage} from './pages/ProfilePage'








export default function App() {
  const {user,isAuth,loading} = UserData()
  return (
    <div>
     {loading?(<LoadingBig/>):(<BrowserRouter>
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/chat' element={isAuth?<Home/>:<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/verify' element={<Verify/>}/>
     </Routes>
     </BrowserRouter>)}
     
    </div>
    // goo
  )

}
