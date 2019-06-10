import React from "react";
import { Link } from "react-router-dom";

function NavTabs(props) {
  return (
    <div className= "navbar navbar-expand-md navbar-light bg-light">
      <div className= "mx-0 order-0">
        <span className= "navbar-text"><h5>{props.page}</h5></span>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/roster"
            className={window.location.pathname === "/roster" ? "nav-link active" : "nav-link"}
          >
            Roster
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/schedule"
            className={window.location.pathname === "/schedule" ? "nav-link active" : "nav-link"}
          >
            Schedule
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/stats"
            className={window.location.pathname === "/stats" ? "nav-link active" : "nav-link"}
          >
            Statistics
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
