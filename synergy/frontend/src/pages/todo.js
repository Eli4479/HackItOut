import { useEffect, useState } from 'react';
import AddNew from '../components/add'
import TaskList from '../components/tasks'
import Sidebar from '../components/sidebar'
import Buttons from '../components/buttons'


function Todo() {
  const [team, setTeam] = useState("");
  useEffect(() => {
    const get_team = async () => {
      const team_id = localStorage.getItem("team_id");
      console.log(team_id);
      let response = await fetch(`http://localhost:3000/api/user/teams/${team_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let data = await response.text();
      let team = JSON.parse(data);
      setTeam(team);
      console.log(team);
    }
    get_team();
  }, [])
  return (
    <div className='flex '>
      <Sidebar name={'sar'} loc='todo' />
      <TaskList className="w-full h-full overflow-y-auto" team={team} />
    </div>
  );
}
export default Todo;