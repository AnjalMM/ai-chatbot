/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Sidebarp} from "../components/Sidebarp";
import { UserData } from "../context/UserContext";

export const ProfilePage = () => {

  
  const [selected, setSelected] = useState("profile"); // Active tab
  const [image, setImage] = useState(null);
  const [theme, setTheme] = useState("dark");
  
  const {user,uploadProfilePicture} = UserData();
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  };

  //
  


  return (
    <div className={`flex ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Sidebar */}
      <Sidebarp selected={selected} setSelected={setSelected} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-[25%]">
        {selected === "profile" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {user ? (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                {/* Profile Image */}
                <label htmlFor="profileUpload">
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4 cursor-pointer"
                  />
                </label>
                <input
                  type="file"
                  id="profileUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={uploadProfilePicture}
                />

                <p className="text-lg"><strong>Name:</strong> {user.fullName}</p>
                <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                <p className="text-lg"><strong>Role:</strong> {user.role}</p>
                <p className="text-lg"><strong>Joined:</strong> {new Date(user.createdAt).toDateString()}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}

        {selected === "settings" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <button
              className="bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700"
              onClick={toggleTheme}
            >
              Change Theme
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


