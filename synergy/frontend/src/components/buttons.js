import "./buttons.css"
import { Link } from "react-router-dom";
import Teams from "../pages/teams";
export default function Buttons({ team }) {
  return (
    // <div className="flex w-full justify-evenly flex-grow-1">
    <Link to={'/TeamName'}>
      <button className="btnn flex-grow">{team.name}</button>
    </Link>
    // </div>
  );
}