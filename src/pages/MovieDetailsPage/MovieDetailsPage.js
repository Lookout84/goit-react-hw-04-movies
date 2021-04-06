import React, { Component } from "react";
import routes from "../../../src/routes";
import fetchMovieDetail from "../../services/apiMovieDetails";

class MovieDetailsPage extends Component {
  state = {};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { movieId } = this.props.match.params;
    return fetchMovieDetail(movieId)
      .then((results) => {
        console.log(results);
        this.setState({ ...results });
      })
      .catch((error) => this.setState({ error }));
    // .finally(() => this.setState({ isLoading: false }));
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    // const { movie } = this.state;
    console.log(this.state);
    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад
        </button>

        {/* <img src={movie.backdrop_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Genres: {movie.genres}</p>
        <p>{movie.overview}</p> */}
      </div>
    );
  }
}

export default MovieDetailsPage;
