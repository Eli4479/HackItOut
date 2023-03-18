import React from "react";
import { useState } from "react";
export default function Registration() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // let bodyContent = JSON.stringify({
    //   "email": email,
    //   "password": password,
    //   "confirmPassword": confirmPassword,
    //   "username": username,
    // })
    // 
    let bodyContent = JSON.stringify({
      "user_name": username,
      "email": email,
      "password": password,
      "confirm_password": confirmPassword,
    });
    let headersList = {
      "Content-Type": "application/json"
    }
    let response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
    let data = await response.text();
    setProfile(data);
    if (response.status === 200) {
      window.location.href = "/login";
    }
  };
  return (
    <div className="relative flex bg-black flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white underline">
          Sign up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-200 bg-black border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-white"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-200 bg-gray-600 border rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setPassword(e.target.value);
              }}

            />
          </div>
          <div className="mb-2">
            <label
              for="confirm password"
              className="block text-sm font-semibold text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-200 bg-gray-600 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label
              for="roll"
              className="block text-sm font-semibold text-white"
            >
              Username
            </label>
            <input
              type="string"
              className="block w-full px-4 py-2 mt-2 text-gray-200 bg-black border rounded-md focus:border-cyan-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mt-6 flex justify-center text-center">
            {/* <div className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={() =>}>
              Register
            </div> */}
            {/* make a button that calls handleSubmit function */}
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600"
              onClick={HandleSubmit}
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-white">
          {" "}
          already have an account?{" "}
          <a href="/login" className="font-medium text-cyan-600 hover:underline">
            Sign in
          </a>
        </p>
      </div >
    </div >
  );
}