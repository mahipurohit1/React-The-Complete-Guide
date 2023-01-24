import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink
              to={""}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
