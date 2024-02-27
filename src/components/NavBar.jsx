import React from "react";
import birdy from "../img/birdy.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top justify-content-between align-items-center">
      <a className="btn mx-5">
        <img src={birdy} style={{ width: "50px" }} />
      </a>
      <div>
        <NavLink to="/" className="mx-3 text-decoration-none text-white">
          Home
        </NavLink>
        <NavLink to="/birds" className="mx-3 text-decoration-none text-white">
          Birds
        </NavLink>
      </div>
      <button className="btn btn-info text-white mx-5">Let's fly</button>
    </nav>
  );
}
