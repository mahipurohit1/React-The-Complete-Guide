import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <NavLink
            to={""}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"events"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Events
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
