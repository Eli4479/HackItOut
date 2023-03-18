import React, { useEffect } from "react";
import {setState} from "react";
import { FaPlusCircle } from "react-icons/fa";
const TaskList = () => {
    // const [is_going,set_is_going] = useEffect(false);

    
    
    return (

        <div class="bg-gray-900 h-screen items-center justify-center flex">

            <card class="bg-gray-900 text-gray-200 mx-auto w-full rounded-lg">

                <header class="  text-center text-cyan-600  font-bold flex   justify-center items-center  text-3xl ">
                    <div className="px-10 py-5  justify-center basis-1/2">TASKS</div>
                    <div className="py-2 justify-center basis-1/2">STATUS</div>
               

                </header>

                <main class="px-5 text-xl text-center">

                    <content class="flex  bg-gray-900 my-2  justify-center items-center ">



                        <div class=" basis-1/2 px-10 py-5 font-semibold flex-col ">
                            <div class=""> Task </div>
                            <div class="text-sm text-gray-400 font-light"> @username </div>
                        </div>

                        <div class="basis-1/2 py-2 justify-center">
                            <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4">
                                Start
                            </button>
                        </div>

                    </content>

                    <content class="flex bg-gray-900 my-2  justify-center items-center  w-full">



                        <div class=" basis-1/2 px-10 py-5 font-semibold flex-col ">
                            <div class=""> Task </div>
                            <div class="text-sm text-gray-400 font-light"> @username </div>
                        </div>

                        <div class=" basis-1/2 py-2 justify-center">
                            <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4">
                                Start
                            </button>
                        </div>

                    </content>
                    <content class="flex my-2 bg-gray-900 justify-center items-center w-full">



                        <div class=" basis-1/2 px-10 py-5 font-semibold flex-col ">
                            <div class=""> Task </div>
                            <div class="text-sm text-gray-400 font-light"> @username </div>
                        </div>

                        <div class="basis-1/2 py-2 justify-center">
                            <button class="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4"
                            >
                                Start
                            </button>
                        </div>

                    </content>



                </main>

                <footer class="px-5 py-4 absolute bottom-5 right-7  text-white">
                    <FaPlusCircle size={40}/>
                </footer>
            </card>



        </div>
    );
};
export default TaskList;
