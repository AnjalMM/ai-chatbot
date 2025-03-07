/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";
import toast from "react-hot-toast";



const chatContext = createContext();
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [inform, setinform] = useState([]);
  const [prompt, setPrompt] = useState("");

  const [newRequestloading, setnewRequestloading] = useState(false);

  async function fetchResponse() {

    if (!selected) {
      toast.error("⚠️ You must create a new chat first!");
      return;
    }

    if (prompt === "") return alert("write prompt");
    setnewRequestloading(true);
    setPrompt("");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBI4ZKj31ascSKNDin2RNsRrd64djXofKg",
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });

      const message = {
        question: prompt,
        answer:
          response["data"]["candidates"][0]["content"]["parts"][0]["text"],
      };
      setMessages((prev) => [...prev, message]);
      setnewRequestloading(false);

      const { data } = await axios.post(
        `${server}/api/chat/${selected}`,
        {
          question: prompt,
          answer:
            response["data"]["candidates"][0]["content"]["parts"][0]["text"],
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      alert("something went wrong");
      console.log(error);
      setnewRequestloading(false);
    }
  }
  const [chats, setchats] = useState([]);
  const [selected, setselected] = useState(null);
  async function fetchChats() {
    try {
      const { data } = await axios.get(`${server}/api/chat/all`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setchats(data);
      setselected(data[0]._id);
      console.log(data[0]._id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const [createLod, setCreateLod] = useState(false);

  async function createChat() {
    setCreateLod(true);
    try {
      const { data } = await axios.post(
        `${server}/api/chat/new`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      fetchChats();
      setCreateLod(false);
    } catch (error) {
      toast.error("some went wrong");
      setCreateLod(false);
    }
  }

  const [loading, setLoading] = useState(false);

  async function fetchMessages() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${server}/api/chat/${selected}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      // setinform(data);
      setMessages(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function deleteChat(id) {
    try {
      const { data } = await axios.delete(`${server}/api/chat/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      toast.success(data.message);
      fetchChats();
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }    
  }

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [selected]);
  return (
    <chatContext.Provider
      value={{
        fetchResponse,
        messages,
        setMessages,
        prompt,
        setPrompt,
        newRequestloading,
        chats,
        createChat,
        createLod,
        selected,
        setselected,
        loading,
        setLoading,
        deleteChat,
        fetchChats,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const ChatData = () => useContext(chatContext);

