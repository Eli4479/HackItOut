import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Log() {
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // export profile variable to teams.js


  const HandleSubmit = async (e) => {
    e.preventDefault();
    let headersList = {
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "email": email,
      "password": password,
    });

    console.log(bodyContent);
    let response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.text();
    // convert data to json
    data = JSON.parse(data);
    setProfile(data.profile);
    localStorage.setItem("profile_id", profile._id);

    if (response.status === 200) {
      window.location.href = "/teams";
    }
    if (response.status === 404) {
      // send to error page
      window.location.href = "/error";
    }
  };



  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onClick={(e) => {
                setEmail(e.target.value);
              }
              }
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onClick={(e) => {
                setPassword(e.target.value);
              }
              }
            />
          </div>
          <div className="mt-6 flex justify-center text-center">
            <div className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={HandleSubmit}
            >
              Login
            </div>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="/"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

