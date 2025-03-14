/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/chatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";
import happybeam from '../assets/happy-beaming.svg'
import logochat2 from '../assets/logochat2.png'

export function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestloading,
    loading,
    chats,
    setselected
  } = ChatData();

  function formatMarkdown(text) {

    // Convert code blocks to Prettier formatted code
    text = text.replace(/```([\s\S]*?)```/g, 
    '<pre class="bg-gray-800 text-white p-4 rounded overflow-x-auto overflow-y-auto max-h-96 whitespace-pre-wrap w-full"><code class="whitespace-pre-wrap">$1</code></pre>');
//    whitespace-pre-wrap
    // bg-gray-800 text-white p-4 rounded overflow-x-auto overflow-y-auto max-h-96 whitespace-pre-wrap w-full
// Convert inline `code` to Tailwind-styled <code>
text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-700 px-1 rounded">$1</code>');

// Convert **bold** to Tailwind-styled <p class="font-bold">
text = text.replace(/\*\*(.*?)\*\*/g, '<p class="font-bold text-black">$1</p>');

// Convert *italic* to Tailwind-styled <p class="italic">
text = text.replace(/\*(.*?)\*/g, '<p class="italic text-black">$1</p>');

// Convert Ordered Lists (1. or Step 1:)
text = text.replace(/(?:^|\n)(\d+)\.\s(.*?)(?=\n|$)/g, '<p class="ml-4"><span class="font-bold text-black ">$1.</span> $2</p>');
text = text.replace(/(?:^|\n)(Step\s\d+):\s(.*?)(?=\n|$)/gi, '<p class="ml-4"><span class="font-bold text-black">$1:</span> $2</p>');

text =  text.replace(/\*/g, '<p class="border-t border-gray-300 w-70 px-5 my-10"></p>');

// Convert Unordered Lists (- Item or • Item)
text = text.replace(/(?:^|\n)[-•]\s(.*?)(?=\n|$)/g, '<p class="ml-4"><span class="text-black">•</span> $1</p>');

// Preserve new lines as separate paragraphs
text = text.split("\n").map(line => `<p class="mb-2">${line}</p>`).join("");

// Split text by detecting numbers followed by a dot (1., 2., 3., etc.)
let lines = text.split(/(?:\s|^)(\d+\..*?)(?=\s\d+\.|\s*$)/g).filter(line => line.trim() !== "");

let formattedText = lines.map(line => {
    // Handle Markdown Formatting
    line = line.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-black">$1</span>'); // Bold
    line = line.replace(/\*(.*?)\*/g, '<span class="italic text-black">$1</span>'); // Italic
    line = line.replace(/`([^`]+)`/g, '<code class="bg-black px-1 rounded">$1</code>'); // Inline Code

    return `<p class="mb-2">${line}</p>`;
}).join("");

return text;
}


  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef();

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div className="h-screen">
      <div className="flex h-screen bg-white text-white">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className="flex flex-1 flex-col">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-4 bg-gray-800 text-2xl"
          >
            <GiHamburgerMenu />
          </button>
          <div className="flex-1 p-2 mb-20 md:mb-0">
            <Header />

            {loading ? (
              <LoadingBig />
            ) : (
              <div
                className="p-6 h-[80vh] overflow-y-auto 
         thin-scrollbar23 "
                ref={messagecontainerRef}
              >
                {messages && messages.length > 0 ? (
                  messages.map((e, i) => (
                    <div key={i}>
                    <div className="flex justify-end ">
                      <div className="question123 max-w-max mb-4 p-2 rounded bg-gray-200 text-black">
                        

                        {e.question}
                      </div>
                      </div>
                     
                      <div className="mb-4 p-4 rounded bg-gray-200 text-black">
                       

                        <p dangerouslySetInnerHTML={{ __html: formatMarkdown(e.answer) }}></p>
                      </div>
                    </div>
                  ))
                ) : (
                  // Centered Image When No Messages
          <div className="flex flex-col items-center justify-center h-full">
          <img
            src={logochat2} // Replace with your image
            alt="No Chats Yet"
            className="w-32 h-32   text-yellow-600 mb-4"
          />
          <p className="text-gray-400 pt-2 text-lg">No chats yet, start a conversation!</p>
        </div>
                )}
                  <div className="mb-5">
                  {newRequestloading && <LoadingSmall />}
                  </div>
              
              </div>
            )}
               <div className="fixed bottom-1 w-full p-2 shadow-lg md:w-[73%]">
  <form className="flex items-center bg-gray-800 rounded-lg  shadow-[0_4px_10px_rgba(128,128,128,0.5),0_-4px_10px_rgba(128,128,128,0.5),4px_0_10px_rgba(128,128,128,0.5),-4px_0_10px_rgba(128,128,128,0.5)] px-4 py-2" onSubmit={submitHandler}>
    <input
      className="flex-grow p-4 text-white bg-transparent outline-none placeholder-gray-300"
      type="text"
      placeholder="Enter a prompt here..."
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      required
      onKeyDown={(e) => {
        if (e.key === "Enter") submitHandler(e);
      }}
    />
    <IoMdSend className="text-2xl text-white cursor-pointer hover:text-gray-300" onClick={submitHandler} />
  </form>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
