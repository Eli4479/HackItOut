import { useState } from 'react';
import AddNew from '../components/add'
import  TaskList from '../components/tasks'
import Sidebar from '../components/sidebar'




function Todo(){
return (
  <div className='flex '>
  <Sidebar/>
  <TaskList className mt-5/>
  </div>
 
    
  );
}

export default Todo;