import React from "react";
import imgError from "../../img/img-error.png";

const DetalisList = ({ movie, genres, url }) => {
  return (
    <div key={movie.id}>
      <img src={movie.poster_path ? `${url + movie.poster_path}` : `${imgError}`  } alt={movie.title} />
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
