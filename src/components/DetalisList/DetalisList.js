import React from "react";
import { Link, withRouter } from "react-router-dom";

const DetalisList = ({ movie, genres, url, location }) => {
  return (
    <div key={movie.id}>
      <img src={url + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <h3>Genres: </h3>
      <p>{genres}</p>
      <h3>Overview: </h3>
      <p>{movie.overview}</p>

      <ul className="CastList">
        <li>
            <Link
              to={{
                pathname: `/movies/${movie.id}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </Link>
          </li> 
      </ul>
      <ul className="ReviewsList">
        <li>
            <Link
              to={{
                pathname: `/movies/${movie.id}/reviews`,
                state: { from: location },
              }}
            >
              Reviews
            </Link>
          </li> 
      </ul>
      
    </div>
  );
};

export default withRouter(DetalisList);
