import React, { Component } from "react";
import routes from "../../../src/routes";
import { fetchMovieDetail } from "../../services/apiMoviesFetch";
import DetalisList from "../../components/DetalisList/DetalisList";
import { NavLink } from "react-router-dom";
import addRoutes from "../../../src/addRoutes";
import RoutesDetalies from "../../components/RoutesDetalis";
import s from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    genres: "",
    cast: [],
    id: "",
    isLoading: false,
    url: "https://image.tmdb.org/t/p/w500",
  };

  componentDidMount() {
    this.getMovie();
    this.getGenres();
  }

  getMovie = () => {
    const { movieId } = this.props.match.params;
    return fetchMovieDetail(movieId)
      .then((results) => {
        console.log(this.props.match.params.movieId);

        this.setState({
          movie: { ...results },
          id: this.props.match.params.movieId,
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
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
    const { match } = this.props;
    console.log(match);
    console.log(this.props.location.state.from);
    const { movie, genres, url, id } = this.state;
    return (
      <>
        <button className={s.Button} type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <div className="container-fluid">
          <DetalisList movie={movie} genres={genres} url={url} />
        </div>
        <div>
          <p>Additional information</p>
          <ul className="List">
            {addRoutes.map(({ exact, name, url }) => (
              <li key={name}>
                <NavLink
                  exact={exact}
                  to={{
                    pathname: `${match.url}${url}`,
                    state: {
                      from: this.props.location.state.from,
                      id: id,
                    },
                  }}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <RoutesDetalies />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
