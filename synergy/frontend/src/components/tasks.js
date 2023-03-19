import React, { useEffect } from "react";
import { useState } from "react";
import { setState } from "react";
import { FaPlusCircle } from "react-icons/fa";
const TaskList = ({ the_todos, team }) => {
  console.log(the_todos);

  const [tasks, setTasks] = useState([]);

  const updatetodo = async (todo_id) => {
    try {
      console.log(todo_id);
      const response = await fetch(`http://localhost:3000/api/user/teams/todo/${todo_id}`, {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        })
      });
      let data = await response.text();
      let todo = JSON.parse(data);
      console.log(todo);
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }

  return (

    <div class="bg-gray-900 h-screen w-screen items-center justify-center flex">
      <card class="bg-gray-900 text-gray-200 mx-auto w-full rounded-lg">
        <header class="  text-center text-cyan-600  font-bold flex   justify-center items-center  text-3xl ">
          <div className="px-10 py-5  justify-center basis-1/2">{team.name}</div>
          <div className="py-2 justify-center basis-1/2"></div>
        </header>
        <main class="px-5 text-xl text-center overflow-scroll ">
          {the_todos.map((todo) => {
            return (
              <content key={todo._id} class="flex my-2 bg-gray-900 justify-center items-center w-full">
                <div class=" basis-1/2 px-10 py-5 font-semibold flex-col ">
                  <div class=""> {todo.todo_name} </div>
                  <div class="text-sm text-gray-400 font-light"> {todo.assigned_to}</div>
                </div>
                <div class="basis-1/2 py-2 justify-center">
                  <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4"
                    onClick={
                      () => {
                        updatetodo(todo._id);
                      }
                    }>
                    {todo.status}
                  </button>
                </div>
              </content>
            );
          }
          )}

        </main>
        <footer class="px-5 py-4 absolute bottom-5 right-7  text-white">
          <FaPlusCircle size={40} onClick={
            () => {
              window.location.href = `/add`;
            }
          }
          />
        </footer>
      </card>



    </div>
  );
};
export default TaskList;