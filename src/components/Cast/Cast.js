import React, { Component } from "react";
import { getFetchCast } from "../../services/apiMoviesFetch";
import imgError from "../../img/img-error.png";

class Cast extends Component {
  state = {
    cast: [],
    url: "https://image.tmdb.org/t/p/w500",
    isLoading: false,
  };

  componentDidMount() {
    this.getCast();
  }

  getCast = () => {
    const movieId = this.props.location.state.id;
    return getFetchCast(movieId)
      .then((results) => {
        console.log(results);
        this.setState({ cast: [...results] });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { cast, url } = this.state;
    return (
      <div>
        <h4>Cast</h4>
        {cast.length > 0 && (
          <ul>
            {cast.map(({ name, profile_path, character, id }) => (
              <li key={id}>
                <img
                  src={profile_path ? `${url + profile_path}` : `${imgError}`}
                  alt={name}
                  width="150"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Cast;
