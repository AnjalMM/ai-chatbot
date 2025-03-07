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
text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-1 rounded">$1</code>');

// Convert **bold** to Tailwind-styled <p class="font-bold">
text = text.replace(/\*\*(.*?)\*\*/g, '<p class="font-bold text-orange-500">$1</p>');

// Convert *italic* to Tailwind-styled <p class="italic">
text = text.replace(/\*(.*?)\*/g, '<p class="italic text-blue-500">$1</p>');

// Convert Ordered Lists (1. or Step 1:)
text = text.replace(/(?:^|\n)(\d+)\.\s(.*?)(?=\n|$)/g, '<p class="ml-4"><span class="font-bold text-purple-500">$1.</span> $2</p>');
text = text.replace(/(?:^|\n)(Step\s\d+):\s(.*?)(?=\n|$)/gi, '<p class="ml-4"><span class="font-bold text-green-500">$1:</span> $2</p>');

text =  text.replace(/\*/g, '<p class="border-t border-gray-400 w-70 px-5 my-10"></p>');

// Convert Unordered Lists (- Item or • Item)
text = text.replace(/(?:^|\n)[-•]\s(.*?)(?=\n|$)/g, '<p class="ml-4"><span class="text-gray-500">•</span> $1</p>');

// Preserve new lines as separate paragraphs
text = text.split("\n").map(line => `<p class="mb-2">${line}</p>`).join("");

// Split text by detecting numbers followed by a dot (1., 2., 3., etc.)
let lines = text.split(/(?:\s|^)(\d+\..*?)(?=\s\d+\.|\s*$)/g).filter(line => line.trim() !== "");

let formattedText = lines.map(line => {
    // Handle Markdown Formatting
    line = line.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-orange-500">$1</span>'); // Bold
    line = line.replace(/\*(.*?)\*/g, '<span class="italic text-blue-500">$1</span>'); // Italic
    line = line.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-1 rounded">$1</code>'); // Inline Code

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
      <div className="flex h-screen bg-gray-500 text-white">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className="flex flex-1 flex-col">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-4 bg-gray-800 text-2xl"
          >
            <GiHamburgerMenu />
          </button>
          <div className="flex-1 p-6 mb-20 md:mb-0">
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
                      <div className="question123 max-w-max mb-4 p-2 rounded bg-blue-700 text-white">
                        

                        {e.question}
                      </div>
                      </div>
                     
                      <div className="mb-4 p-4 rounded bg-gray-700 text-white">
                       

                        <p dangerouslySetInnerHTML={{ __html: formatMarkdown(e.answer) }}></p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>no chat yet</p>
                )}

                {newRequestloading && <LoadingSmall />}
              </div>
            )}
            <div
              className="fixed bottom-1   p-1 bg-gray-500 w-full 
      md:w-[70%]"
            >
              <form action="" className="flex " onSubmit={submitHandler}>
                <input
                  className="flex-grow pr-1 p-4 bg-gray-700 rounded text-white outline-none"
                  type="text"
                  placeholder="enter a promt here"
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                  }}
                  required
                />
                <button className="p-4 bg-gray-700 rounded-r text-2xl text-white">
                  <IoMdSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
