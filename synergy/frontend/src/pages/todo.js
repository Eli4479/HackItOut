import { useEffect, useState } from 'react';
import AddNew from '../components/add'
import TaskList from '../components/tasks'
import Sidebar from '../components/sidebar'
import Buttons from '../components/buttons'


function Todo() {
  const [team, setTeam] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const get_team = async () => {
      const team_id = localStorage.getItem("team_id");
      // console.log(team_id);
      let response = await fetch(`http://localhost:3000/api/user/teams/${team_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let data = await response.text();
      let team = JSON.parse(data);
      setTeam(team);
      let the_todos = []
      for (let todo_id of team.todos) {
        if (todo_id === undefined || todo_id === null) {
          continue;
        }
        let response = await fetch(`http://localhost:3000/api/user/teams/todos/${todo_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        let data = await response.text();
        let todo_info = JSON.parse(data);
        the_todos.push(todo_info);
      }
      console.log(the_todos);
      setTodos(the_todos);
    }
    get_team();
  }, [])
  return (
    <div className='flex '>
      <Sidebar name={'sar'} loc='todo' />
      <TaskList className="w-full h-full overflow-y-auto" the_todos={todos} team={team} />
    </div>
  );
}
export default Todo;