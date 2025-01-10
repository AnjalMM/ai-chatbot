/* eslint-disable no-unused-vars */
import { createContext, useContext, useState} from 'react'
import toast from 'react-hot-toast'
import axios from "axios"
import { server } from '../main'

const UserContext = createContext()

 // eslint-disable-next-line react/prop-types
 export const  UserProvider = ({children}) =>{
    const [btnLoading, setBtnLoading] = useState(false);
    async function loginUser(email, navigate) {
        setBtnLoading(true);
        try {
          const { data } = await axios.post(`${server}/api/users/login`, { email });
          console.log(data);
          
          toast.success(data.message)
          localStorage.setItem("verifyToken", data.verifyToken);
          navigate("/verify");
          setBtnLoading(false);
        } catch (error) {
          toast.error(error.response.data.message);
          setBtnLoading(false);
        }
      }

    return (
        <UserContext.Provider value={{loginUser,btnLoading}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserData =() => useContext(UserContext)
