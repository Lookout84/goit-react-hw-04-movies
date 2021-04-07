import React from "react";
import { NavLink, Route } from "react-router-dom";
import Cast from "../Cast/Cast";

const DetalisList = ({ movie, genres, url }) => {
  return (
    <div key={movie.id}>
      <img src={url + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <h3>Genres: </h3>
      <p>{genres}</p>
      <h3>Overview: </h3>
      <p>{movie.overview}</p>

      <ul className="List">
        <li>
          <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Route path={`/movies/${movie.id}/cast`}>
        <Cast />
      </Route>
    </div>
  );
};

export default DetalisList;
