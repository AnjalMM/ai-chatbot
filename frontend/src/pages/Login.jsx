/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { UserData } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from '../components/Loading'

export  function Login() {
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("");

  const {loginUser,btnLoading} = UserData()

const navigate = useNavigate()
  const submitHandler =(e)=>{
    e.preventDefault()
    loginUser(email,password,navigate);
    
  }


  function togglePassword(fieldId, event) {
    const field = document.getElementById(fieldId);
    const icon = event.target;
  
    if (!field || !icon) {
      console.error(`Element not found: ${fieldId}`);
      return;
    }
  
    if (field.type === "password") {
      field.type = "text";
      icon.classList.replace("ph-eye", "ph-eye-slash");
    } else {
      field.type = "password";
      icon.classList.replace("ph-eye-slash", "ph-eye");
    }
  }

 

  return (
   
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="mt-4" onSubmit={submitHandler} >
            <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="example@email.com" required/>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <div className="relative">
                    <input id="login-passwordi" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 pl-10 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="••••••••" required / >
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ph ph-lock"></i>
                    <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer ph ph-eye" onClick={(e)=>{togglePassword('login-passwordi', e)}}></i>
                </div>
            </div>
            <button type="submit" disabled={btnLoading} className="w-full mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">{btnLoading ? <LoadingSpinner /> : "Submit"}</button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">Don&apos;t have an account? <a onClick={()=>{navigate("/signup")}} className="text-blue-500 hover:underline">Sign Up</a></p>
    </div>
    </div>
    
  
   )
 };
