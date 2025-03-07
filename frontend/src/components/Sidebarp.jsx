/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaUserCircle, FaCog, FaSignOutAlt, FaPalette, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Sidebarp = ({ selected, setSelected, toggleTheme }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/4 min-h-screen bg-gray-800 text-white p-6 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-6">Settings</h2>

      <ul>
      <li
          className="flex items-center p-3 mb-3 cursor-pointer rounded bg-gray-700 hover:bg-gray-600"
          onClick={() => navigate("/chat")}
        >
          <FaArrowLeft className="mr-2" /> Back to Chat
        </li>
        <li
          className={`flex items-center p-3 mb-3 cursor-pointer rounded ${
            selected === "profile" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => setSelected("profile")}
        >
          <FaUserCircle className="mr-2" /> Profile
        </li>

        <li
          className={`flex items-center p-3 mb-3 cursor-pointer rounded ${
            selected === "settings" ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => setSelected("settings")}
        >
          <FaCog className="mr-2" /> Settings
        </li>

        <li
          className="flex items-center p-3 mb-3 cursor-pointer rounded hover:bg-gray-700"
          onClick={toggleTheme}
        >
          <FaPalette className="mr-2" /> Change Theme
        </li>

        <li
          className="flex items-center p-3 cursor-pointer rounded bg-red-600 hover:bg-red-700"
          onClick={() => {
            localStorage.removeItem("token"); // Remove token
            window.location.href = "/login"; // Redirect to login
          }}
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </li>
      </ul>
    </div>
  );
};


