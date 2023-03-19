import React from 'react';
import { FaHashtag, FaPlus, FaUserCircle } from 'react-icons/fa';
import Modal from './modal';
import { useState } from 'react';

const Sidebar = ({ name, loc }) => {
  console.log(name);

  const log = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <div className="flex bg-gray-100 flex-col h-screen justify-between">
      <div className="flex flex-col w-64  px-4 py-8 overflow-y-auto border-r">
        <h2 className="text-3xl font-semibold text-center text-cyan-700">Synergy</h2>
        <div className="flex flex-col justify-between mt-6">
          <aside>
            {
              loc === 'team' ? (
                <ul>
                  <li className=' bg-white'>
                    {/* <a className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200" href="#">
                    <FaPlus /> <span className="mx-4 font-medium ">  Create Team</span>
                  </a> */}
                    <Modal type={'Create Team'} />
                  </li>
                  <li className=' bg-white'>
                    {/* <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <FaHashtag /><span className="mx-4 font-medium "> Join Team</span>
                  </a> */}
                    <Modal type={'Join Team'} />
                  </li>
                </ul>
              ) : (
                <>
                  <ul>
                    <button
                      className="flex px-4 py-2 mt-5 w-full text-gray-600 rounded-md hover:bg-gray-200 items-center  font-bold uppercase text-sm  shadow hover:shadow-lg  focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                    >
                      Todo
                    </button>
                    <button
                      className="flex px-4 py-2 mt-5 w-full text-gray-600 rounded-md hover:bg-gray-200 items-center  font-bold uppercase text-sm  shadow hover:shadow-lg  focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={log}
                    >
                      Logout
                    </button>
                  </ul>
                </>
              )
            }
          </aside>
        </div>
      </div>

      <div className=" flex  items-center mb-0 w-64 bg-blue-900 text-white h-35 p-4 ">
        <FaUserCircle size={27} className='ml-4 ' /> <span className=" ml-4 font-medium "> {
          loc === 'team' ? name.username : name
        }</span>
      </div>
    </div>
  );
};

export default Sidebar;