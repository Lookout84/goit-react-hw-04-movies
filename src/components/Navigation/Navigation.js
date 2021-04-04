import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Navigation = ({ match }) => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink to={`${match.url}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}movies`}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default withRouter(Navigation);
