import React from 'react';
import { FaHashtag, FaPlus } from 'react-icons/fa';


const Sidebar = () => {
  return (
    
    <div className="flex">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <h2 className="text-3xl font-semibold text-center text-blue-800">Synergy</h2>


        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md " href="#">
                  
                <FaPlus/> <span className="mx-4 font-medium  ">  Create Team</span>
                </a>
              </li>

              <li>
                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">

                <FaHashtag/><span className="mx-4 font-medium "> Join Team</span>
                </a>
              </li>
            </ul>

          </aside>
          
        </div>
      </div>
      {/* <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <div className="flex items-center justify-center p-40 border-4 border-dotted">
          Content...
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;