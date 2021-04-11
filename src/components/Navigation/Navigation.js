import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Navigation = ({ match }) => {
  return (
    <nav className={s.Nav}>
      <ul className={s.navList}>
        <li className={s.navLink}>
          <NavLink to={`${match.url}`}>Home</NavLink>
        </li>
        <li className={s.navLink}>
          <NavLink to={`${match.url}movies`}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default withRouter(Navigation);
