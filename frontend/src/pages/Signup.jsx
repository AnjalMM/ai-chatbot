/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { UserData } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/Loading';

export default function Signup() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const { signupUser, btnLoading } = UserData();
    const navigate = useNavigate();
  
    const submitHandler = (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match!");
        return;
      }
  
      setErrorMessage(""); // Clear error if passwords match
      console.log("Form submitted successfully!");

      signupUser(fullName, email, password, confirmPassword, navigate);
    };




    function togglePassword(fieldId, icon) {
        const field = document.getElementById(fieldId);
        if (!field) return; // Prevents errors if element is not found
    
        const isPassword = field.type === "password";
        field.type = isPassword ? "text" : "password";
    
        if (icon) {
            icon.classList.toggle("ph-eye");
            icon.classList.toggle("ph-eye-slash");
        }
    }


  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="mt-4" onSubmit={submitHandler}>
            <div>
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <div className="relative">
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 pl-10 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="John Doe" required />
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ph ph-user"></i>
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="example@email.com" required />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <div className="relative">
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 pl-10 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="••••••••" required />
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ph ph-lock"></i>
                    <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer ph ph-eye" onClick={togglePassword('password', this)}></i>
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                <div className="relative">
                    <input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 pl-10 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="••••••••" required />
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ph ph-lock"></i>
                    <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer ph ph-eye" onClick={togglePassword('confirm-password', this)}></i>
                </div>
            </div>
  {/* Error Message */}
  {errorMessage && (
          <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
        )}


            <button type="submit" disabled={btnLoading} className="w-full mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">{btnLoading ? <LoadingSpinner /> : "Sign Up"}</button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">Already have an account? <a onClick={()=>{navigate("/login")}} className="text-blue-500 hover:underline">Login</a></p>
    </div>
    </div>
  )
}
