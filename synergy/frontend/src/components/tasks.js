import React from "react";
const TaskList = () => {
  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className="text-blue-600 uppercase font-bold my-5 text-3xl">Task List</h1>
      <div className="w-1/2 bg-gray-100 backdrop-blur-lg px-3 py-3 rounded-md">
          <div className="flex justify-between items-center ">
            <li className="list-none w-2/3 text-left font-bold  uppercase text-1.5xl p-1 text-gray-800  break-normal">Task 1</li>
            <div className="flex gap-2">
            <button className="bg-green-600 text-white px-2 py-1 font-medium rounded-md">In Progress</button>
                <button className="bg-blue-600 text-white px-2 py-1 font-medium rounded-md">Completed</button>
                
            </div>
          </div>
      </div>
    </div>
  );
};
export default TaskList;
