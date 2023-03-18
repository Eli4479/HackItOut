import { useState } from 'react';
import AddNew from '../components/add'
import  TaskList from '../components/tasks'
import Sidebar from '../components/sidebar'
import Buttons from '../components/buttons'




function Todo(){
return (
  <>
  <div className='flex items-center justify-center'>
  <div><Sidebar/></div>
  <div className='w-full h-full overflow-y-auto'> <TaskList /> </div>


  </div>

   
  </>
  

 
    
  );
}

export default Todo;