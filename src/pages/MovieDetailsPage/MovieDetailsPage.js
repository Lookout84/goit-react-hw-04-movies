import React, { Component } from "react";
import routes from "../../../src/routes";
import fetchMovieDetail from "../../services/apiMovieDetails";
import DetalisList from "../../components/DetalisList/DetalisList";
import { NavLink } from "react-router-dom";
import addRoutes from "../../../src/addRoutes";
import RoutesDetalies from "../../components/RoutesDetalis";
// import getFetchCast from "../../services/apiMovieCast";

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
    // this.getCast();
  }

  getMovie = () => {
    const { movieId } = this.props.match.params;
    return fetchMovieDetail(movieId)
      .then((results) => {
        console.log(results);
        this.setState({
          movie: { ...results, id: this.props.match.params.movieId },
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

  // getCast = () => {
  //   const { movieId } = this.props.match.params;
  //   return getFetchCast(movieId)
  //     .then((results) => {
  //       console.log(results);
  //       this.setState({ cast: [...results] });
  //     })
  //     .catch((error) => this.setState({ error }));
  //   // .finally(() => this.setState({ isLoading: false }));
  // };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { match } = this.props;
    console.log(match);
    const { movie, genres, url, id } = this.state;
    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <DetalisList movie={movie} genres={genres} url={url} />
        
        <ul className="List">
          {addRoutes.map(({ exact, name, url }) => (
            <li>
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
    );
  }
}

export default MovieDetailsPage;

// {
//   /* <Switch>
//           <Route path={`${match.path}:movieId/cast`} component={Cast} /> */
// }
// {
//   /* <Route path="/movies/:movieId/reviews" component={MoviesReviews} /> */
// }
// // </Switch>
// {
//   /* <Route
//           path={`${match.path}:movieId/cast`}
//           render={(props) => {
//             // const momieId = Number(props.match.params.movieId);
//             // const casts = cast.find(({ id }) => id === momieId);
//             // console.log(casts);
//             return (
//               <ul>
//                 {cast.map(({ name, profile_path, character, id }) => (
//                   <li key={id}>
//                     <img src={url + profile_path} alt={name} width="150" />
//                     <p>{name}</p>
//                     <p>Character: {character}</p>
//                   </li>
//                 ))}
//               </ul>
//               // <Cast cast={cast} url={url} />;
//             );
//           }}
//         /> */
// }
