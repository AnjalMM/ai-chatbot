/* eslint-disable no-unused-vars */
import { createContext, useContext, useState} from 'react'
import toast from 'react-hot-toast'
import axios from "axios"
import { server } from '../main'
import { useEffect } from 'react'


const UserContext = createContext()

 // eslint-disable-next-line react/prop-types
 export const  UserProvider = ({children}) =>{
    const [btnLoading, setBtnLoading] = useState(false);
    

    async function signupUser(fullName, email, password, confirmPassword, navigate) {
      setBtnLoading(true);
      try {
        const { data } = await axios.post(`${server}/api/users/signup`, {
          fullName,
          email,
          password,
          confirmPassword,
        });
  
        toast.success(data.message); // Show success toast message
        navigate("/login"); // Redirect to login after successful signup
      } catch (error) {
        toast.error(error.response?.data?.message || "Signup failed");
      }
      setBtnLoading(false);
    }

    async function loginUser(email,password, navigate) {
        setBtnLoading(true);
        try {
          const { data } = await axios.post(`${server}/api/users/login`, { email, password});
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
   
      const [user,setUser] = useState([])
      const [isAuth,setIsAuth]=useState(false)
     
      async function verifyUser(otp, navigate,fetchChats) {
        const verifyToken = localStorage.getItem("verifyToken");
        setBtnLoading(true);
    
        if (!verifyToken) return toast.error("Please give token");
        try {
          const { data } = await axios.post(`${server}/api/users/verify`, {
            otp,
            verifyToken,
          });
    
          toast.success(data.message);
          localStorage.clear();
          localStorage.setItem("token", data.token);
          navigate("/chat");
          setBtnLoading(false);
          setIsAuth(true)
          setUser(data.user)
          console.log("verifyforing ",data);
          
          fetchChats()
        } catch (error) {
          toast.error(error.response.data.message);
          setBtnLoading(false);
        }
      }

      const [loading, setLoading] = useState(true);

  async function fetchUser() {
    try {
      const { data } = await axios.get(`${server}/api/users/me`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setIsAuth(true);
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsAuth(false);
      setLoading(false);
    }
  }

  const uploadProfilePicture = async (e) => {
    const file = e.target.files[0];
    if (!file) return console.error("No file selected");

    console.log("Uploading file:", file); // Debug log

    const formData = new FormData();
    formData.append("profilePicture", file);

    const token = localStorage.getItem("token");
    if (!token) return console.error("No token found");

    try {
      const { data } = await axios.post(`${server}/api/users/uploadprofile`, formData, {
        headers: { "Content-Type": "multipart/form-data", token: localStorage.getItem("token") },
      });
      setUser((prev) => ({ ...prev, profilePicture: data.profilePicture }));
    } catch (error) {
      console.error("Error uploading profile picture", error);
    }
  };

  const logoutHandler = (navigate) => {
    localStorage.clear();

    toast.success("logged out");
    setIsAuth(false);
    setUser([]);
    navigate("/login");
  };


  useEffect(() => {
    fetchUser();
  }, []);

    return (
        <UserContext.Provider value={{signupUser,loginUser,btnLoading,isAuth,setIsAuth,user,verifyUser,loading,logoutHandler,fetchUser,uploadProfilePicture}}>
            {children}
        </UserContext.Provider>
    )
}


export const UserData =() => useContext(UserContext)
