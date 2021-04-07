import React, { Component } from "react";
import routes from "../../../src/routes";
import fetchMovieDetail from "../../services/apiMovieDetails";
import DetalisList from "../../components/DetalisList/DetalisList";

class MovieDetailsPage extends Component {
  state = { movie: {}, genres: "", url: "https://image.tmdb.org/t/p/w500" };

  componentDidMount() {
    this.getMovie();
    this.getGenres();
  }

  getMovie = () => {
    const { movieId } = this.props.match.params;
    return fetchMovieDetail(movieId)
      .then((results) => {
        console.log(results);
        this.setState({ movie: { ...results } });
      })
      .catch((error) => this.setState({ error }));
    // .finally(() => this.setState({ isLoading: false }));
  };

  getGenres = () => {
    const { movieId } = this.props.match.params;
    return fetchMovieDetail(movieId)
      .then((results) => results.genres)
      .then((genres) => {
        const result = genres
          .map((id) => (id.name = " " + id.name))
          .join(",  ");
        return this.setState({ genres: [result] });
      })
      .catch((error) => this.setState({ error }));
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { movie, genres, url } = this.state;
    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <DetalisList movie={movie} genres={genres} url={url} />
      </div>
    );
  }
}

export default MovieDetailsPage;
