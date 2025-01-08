/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export const Verify = () => {

  const [otp,setotp]=useState("")

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log(otp);
    
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-6 rounded shadow-md w-full
     md:w-[500px]"
     onSubmit={submitHandler}
      
      >
        <h2 className="text-2xl mb-4">otp verify</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            otp:
          </label>
          <input
            type="otp"
            id="otp"
            value={otp}
            onChange={e=>{setotp(e.target.value)}}
            
            className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-700"
         
        >submit
        
        </button>
      </form>
    </div>
    </div>
  )
}
