import { useEffect, useState } from 'react';
import AddNew from '../components/add'
import TaskList from '../components/tasks'
import Sidebar from '../components/sidebar'
import Buttons from '../components/buttons'


function Todo() {
  const [team, setTeam] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {

    const get_user = async (id) => {
      try {
        let response = await fetch(`http://localhost:3000/api/user/${id.assigned_to}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        let data = await response.text();
        let profile = JSON.parse(data);
        id.assigned_to = profile.username;

        // for every todo in todos, if todo.id === id.id, then todo.assigned_to = profile.username
        for (let todo of todos) {
          if (todo.id === id.id) {
            todo.assigned_to = profile.username;
            setTodos(todos);
          }
        }
      }
      catch (err) {
        console.log(err);
      }
    }


    const get_team = async () => {
      const team_id = localStorage.getItem("team_id");
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

        // for todo_info.assigned_to, get the profile name
        let response2 = await fetch(`http://localhost:3000/api/user/${todo_info.assigned_to}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        let data2 = await response2.text();
        let profile = JSON.parse(data2);
        todo_info.assigned_to = profile.username;


        the_todos.push(todo_info);
      }
      console.log(the_todos);
      setTodos(the_todos);
      return the_todos
    }
    get_team().then((the_todos) => {
      the_todos.map((todo) => {
        get_user(todo);
      })
    })

  }, [])
  return (
    <div className='flex '>
      <Sidebar name={'sar'} loc='todo' />
      <TaskList className="w-full h-full overflow-y-auto" the_todos={todos} team={team} />
    </div>
  );
}
export default Todo;