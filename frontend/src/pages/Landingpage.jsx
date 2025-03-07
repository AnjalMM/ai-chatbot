/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ai from '../assets/ai-technology.svg'
import arrow from '../assets/arrow.svg'
import cpu from '../assets/cpu.svg'
import database from '../assets/database.svg'
import globe from '../assets/globe.svg'
import laptop from '../assets/laptop-mobile.svg'
import microchip from '../assets/microchip-ai.svg'
import microchipai from '../assets/microchip-ai.svg'
// import plug from '../assets/plug.svg'
// import screen from '../assets/screen.svg'
// import userrobot from '../assets/user-robot.svg'
import wifi from '../assets/wifi-password.svg'
import { useNavigate } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Landingpage() {

  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is this chatbot?",
      answer:
        "Our chatbot is an AI-powered assistant designed to help you with instant responses, automated support, and smart interactions for a seamless experience.",
    },
    {
      question: "How does the chatbot work?",
      answer:
        "The chatbot uses Natural Language Processing (NLP) and AI to understand your queries and provide accurate responses.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! We prioritize your privacy and follow strict security protocols to ensure your data remains confidential.",
    },
    {
      question: "Do I need an account to use the chatbot?",
      answer:
        "No, you can start chatting instantly! However, creating an account unlocks additional features such as chat history and personalized responses.",
    },
  ];
  return (
    
         <div className="bg-gray-50 m-0 p-0 box-border">
      {/* Navbar with Sign In/Sign Up */}
      <nav className="fixed z-10 top-0 left-0 w-full flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 backdrop-blur-lg shadow-lg py-4 px-8 z-20">
      {/* Brand Logo */}
      <h1 className="text-2xl font-extrabold text-white tracking-wide">Neurofy</h1>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-lg font-semibold text-white">
        <li className="hover:text-gray-300 transition-transform transform hover:scale-105">
          <a href="#Homenav">Home</a>
        </li>
        <li className="hover:text-gray-300 transition-transform transform hover:scale-105">
          <a href="#featuresnav">Features</a>
        </li>
        <li className="hover:text-gray-300 transition-transform transform hover:scale-105">
          <a href="#howitworknav">How It Works</a>
        </li>
        <li className="hover:text-gray-300 transition-transform transform hover:scale-105">
          <a href="#faqnav">FAQs</a>
        </li>
        <li className="hover:text-gray-300 transition-transform transform hover:scale-105">
          <a href="#contactsnav">Contact</a>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 border border-white text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-blue-600 transition duration-300"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </nav>
      
      {/* Hero Section */}
      <header
      id="Homenav"
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
      style={{
        backgroundImage: "url('https://bluesoft.com/wp-content/uploads/2024/11/MicrosoftTeams-image.jpg')",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Your Smartest Digital Assistant - Powered by AI!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Your intelligent virtual assistant that simplifies communication
          and boosts productivity with 
          <span className="font-serif text-3xl text-yellow-400"> Neurofy</span>
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/chat")}
          className="mt-6 px-6 py-3 flex items-center gap-2 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Start Chatting Now!
          <img src={arrow} alt="arrow" className="w-4 h-5" />
        </button>
      </div>
    </header>

      {/* Features Section */}
      <section id="featuresnav" className="h-[100vh] container mx-auto py-16 px-6">
        <h2 className="pt-20 text-3xl font-bold text-center mb-10">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold"> 24/7 Availability</h3>
            <p className="mt-2 text-gray-600">Never miss a query</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold"> Instant & Accurate Responses</h3>
            <p className="mt-2 text-gray-600">AI-powered intelligence.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Multilingual Support</h3>
            <p className="mt-2 text-gray-600">Communicate in any language.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Customizable for Your Business</h3>
            <p className="mt-2 text-gray-600"> Tailor the chatbot to your needs..</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Seamless Integration</h3>
            <p className="mt-2 text-gray-600"> Works with your website, apps, and social media..</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="mt-2 text-gray-600">End-to-end encryption ensures secure conversations..</p>
          </div>
        </div>
      </section>
     
      <section className='p-10'>
     <div className="wrappermeth">
        <div className="item item1"><p>Deep Learning</p></div>
        <div className="item item2"><p>Neural Networks (NN)</p></div>
        <div className="item item3"><p>Natural Language Processing (NLP) </p></div>
        <div className="item item4"><p>Unsupervised Learning</p></div>
        <div className="item item5"><p>Convolutional Neural Networks (CNNs) </p></div>
        <div className="item item6"><p>Generative AI </p></div>
        <div className="item item7"><p>AI Ethics</p></div>
        <div className="item item8"><p>Bias in AI</p></div>
    </div>

    <div className="image-wrapper">
        <div className="img img1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0N_NMfyOEUSwqQwafPbDC9mhvwcJkRsrJXA&s" alt=""/></div>
        <div className="img img2"><img src="https://effvision.com/wp-content/uploads/2024/06/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg" alt=""/></div>
        <div className="img img3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTcGpz_ASfOWAf6rLe9I3XTABVaQFCTISdg&s" alt=""/></div>
        <div className="img img4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdJdDU5tbLGZCai6pHH1xbg1EklOPugpgeg&s" alt=""/></div>
        <div className="img img5"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQns54qi1i5CqjwzySuNKZ_XarEoPciLwQMw&s" alt=""/></div>
        <div className="img img6"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZwubgy74tlyoNN2YQHOlruXstBmV-hmwdQ&s" alt=""/></div>
        <div className="img img7"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6O3JNBylobYryHbyakwOtJ_WX8lHitEjQg&s" alt=""/></div>
        <div className="img img8"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOT1rpGai1M4Z3pmTpzWU3GQjkbqpXwv5sQ&s" alt=""/></div>
    </div>
   
    <div className="faicons">
          <div className=" svgai svgai1"><img src={ai} alt="" /></div>
          <div className=" svgai svgai2"><img src={cpu} alt="" /></div>
          <div className=" svgai svgai3"><img src={database} alt="" /></div>
          <div className=" svgai svgai4"><img src={globe} alt="" /></div>
          <div className=" svgai svgai5"><img src={laptop} alt="" /></div>
          <div className=" svgai svgai6"><img src={microchip} alt="" /></div>
          <div className=" svgai svgai7"><img src={microchipai} alt="" /></div>
          <div className=" svgai svgai8"><img src={wifi} alt="" /></div>
    </div>
     </section>

      {/*How it work*/}
      <section id="howitworknav" className="bg-gray-100 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-blue-600">How It Works</h2>
    <p className="text-gray-600 mt-4">Experience seamless AI-powered conversations in just a few simple steps.</p>

    <div className="grid md:grid-cols-3 ml-2 justify-center mt-8 gap-8">
     
      <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-blue-500">1. Start Chatting</h3>
        <p className="text-gray-500 mt-2">Click the chat button & type your message.</p>
      </div>

    
      <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-blue-500">2. AI Analyzes</h3>
        <p className="text-gray-500 mt-2">Our AI understands & responds instantly.</p>
      </div>

      
      <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-blue-500">3. Get Instant Help</h3>
        <p className="text-gray-500 mt-2">Receive quick answers, solutions, or book services.</p>
      </div>


      <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-blue-500">4. AI Learns & Adapts</h3>
        <p className="text-gray-500 mt-2">Our chatbot improves with every conversation.</p>
      </div>

      <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-blue-500">5. Chat Anywhere</h3>
        <p className="text-gray-500 mt-2">Use our AI chatbot on any device & platform.</p>
      </div>

      <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-blue-500">6. Smart Handoff</h3>
        <p className="text-gray-500 mt-2">If needed, connect with a human agent instantly.</p>
      </div>

    </div>
    
    

    
  </div>
</section>

<section id="faqnav" className="max-w-4xl mx-auto my-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
              >
                {faq.question}
                {isOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
              </button>
              {isOpen && <p className="mt-3 text-gray-700">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="container mx-auto px-6 md:flex md:justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center md:w-1/3">
            <p className="italic">&quot;Amazing platform! Highly recommended.&quot;</p>
            <h4 className="mt-4 font-semibold">- Athul I P</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center md:w-1/3">
            <p className="italic">&quot;Transformed the way we work!&quot;</p>
            <h4 className="mt-4 font-semibold">- Risvana P S</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Join Us Today</h2>
        <p className="mt-4 text-gray-600">Start your journey with us now.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700">Sign Up</button>
      </section>

      <footer id="contactsnav" className=" h-screen bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
         
            <div>
              <h2 className="text-xl font-semibold">AI Startup</h2>
              <p className="text-gray-400 mt-2">
                Revolutionizing the future with cutting-edge AI solutions.
              </p>
            </div>
      
     
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
      
       
            <div>
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-gray-400 mt-2">Subscribe to our newsletter for the latest updates.</p>
              <form className="mt-4 flex">
                <input type="email" placeholder="Your email" className="w-full p-2 rounded-l bg-gray-800 text-white focus:outline-none"/>
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r">Subscribe</button>
              </form>
            </div>
      
          </div>
      
          
          <div className="mt-[33%] border-t border-gray-700  pt-6 text-center text-gray-500 text-sm">
            <p>&copy; 2025 AI chatbot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    
  )
}

