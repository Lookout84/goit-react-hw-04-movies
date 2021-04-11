import React from "react";
import imgError from "../../img/img-error.png";
import s from "./DetalisList.module.css";
const DetalisList = ({ movie, genres, url }) => {
  return (
    <div key={movie.id} className={s.DetalisMovie}>
      <img
        className={s.Image}
        src={movie.poster_path ? `${url + movie.poster_path}` : `${imgError}`}
        alt={movie.title}
        width="500"
      />
      <h2>{movie.title}</h2>
      <h3>User score: </h3>
      <p>{movie.vote_average * 10}%</p>
      <h3>Genres: </h3>
      <p>{genres}</p>
      <h3>Overview: </h3>
      <p>{movie.overview || "This movie has no overview yet."}</p>
    </div>
  );
};

export default DetalisList;
