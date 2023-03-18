import "./buttons.css"
import { Link } from "react-router-dom";
import Teams from "../pages/teams";
export default function Buttons() {
  return (
    // <div className="flex w-full justify-evenly flex-grow-1">
      <Link to={'/TeamName'}>
        <button className="btnn flex-grow">`${Teams.name}`</button>
       </Link>
    // </div>
  );
}