/* eslint-disable no-unused-vars */


import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";
import { ArrowLeft } from "lucide-react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signupUser, btnLoading } = UserData();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    setErrorMessage("");
    signupUser(fullName, email, password, confirmPassword, navigate);
  };

  const togglePassword = (fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.type = field.type === "password" ? "text" : "password";
    }
  };

  return (
    <div
      className="bgimghome flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://informationage-production.s3.amazonaws.com/uploads/2022/10/how-can-technology-design-be-made-more-inclusive.jpeg')",
       }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

       {/* Back Arrow Button */}
       <button
        className="absolute top-4 left-4 flex items-center text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={24} />
      </button>

      <div className="relative z-10 w-full max-w-md bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>

        <form className="mt-6" onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 mt-1 bg-transparent border border-gray-300 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 bg-transparent border border-gray-300 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-1 bg-transparent border border-gray-300 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
                required
              />
              <span
                className="absolute right-4 top-4 text-gray-300 cursor-pointer"
                onClick={() => togglePassword("password")}
              >
                👁
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Confirm Password</label>
            <div className="relative">
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 mt-1 bg-transparent border border-gray-300 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
                required
              />
              <span
                className="absolute right-4 top-4 text-gray-300 cursor-pointer"
                onClick={() => togglePassword("confirm-password")}
              >
                👁
              </span>
            </div>
          </div>

          {errorMessage && <p className="text-red-400 text-sm mb-4">{errorMessage}</p>}

          <button
            type="submit"
            disabled={btnLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-lg font-semibold hover:from-indigo-500 hover:to-blue-500 transition duration-300"
          >
            {btnLoading ? <LoadingSpinner /> : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}


