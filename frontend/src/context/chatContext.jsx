/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useState } from "react";

const chatContext = createContext()
export const ChatProvider =({children})=>{
    const [messages , setMessages] = useState([])
    const [prompt,setPrompt] = useState("")

    const [newRequestloading,setnewRequestloading]=useState(false)

    async function  fetchResponse() {
      if(prompt==="")return alert("write prompt")
        setnewRequestloading(true)
    setPrompt("")
        try {
            const  response = await axios({
                url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBI4ZKj31ascSKNDin2RNsRrd64djXofKg",
                method:"post",
                data:{
                    contents:[{parts:[{text:prompt}]}],
                }
            })

            const message ={
                question:prompt,
                answer:response['data']['candidates'][0]["content"]["parts"][0]["text"],
            }
            setMessages(prev=>[...prev,message])
            setnewRequestloading(false)
        } catch (error) {
            alert("something went wrong")
            console.log(error);
            setnewRequestloading(false)
            
        }
        
    }

 return <chatContext.Provider value={{fetchResponse,messages,prompt,setPrompt,newRequestloading}}>
    {children}
 </chatContext.Provider>
}

export const ChatData = ()=> useContext(chatContext)