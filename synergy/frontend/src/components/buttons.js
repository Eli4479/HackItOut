import "./buttons.css"
import { Link } from "react-router-dom";
import Teams from "../pages/teams";
export default function Buttons({ team }) {
  const open_team = async (e) => {

    e.preventDefault();
    console.log(team._id);
    localStorage.setItem("team_id", team._id);

    window.location.href = "/todo";

  }
  return (
    // <div className="flex w-full justify-evenly flex-grow-1">
    <Link to={'/TeamName'}>
      <button className="btnn flex-grow" onClick={open_team}>{team.name}</button>
    </Link>
    // </div>
  );
}