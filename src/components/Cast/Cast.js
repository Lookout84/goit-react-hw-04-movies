import React, { Component } from "react";
//import routes from "../../../src/routes";
import getFetchCast from "../../services/apiMovieCast";

class Cast extends Component {
  state = { cast: [], url: "https://image.tmdb.org/t/p/w500" };

  componentDidMount() {
    this.getCast();
  }

  getCast = () => {
    const { movieId } = this.props.match.params;
    return getFetchCast(movieId)
      .then((results) => {
        console.log(results);
        this.setState({ cast: [...results] });
      })
      .catch((error) => this.setState({ error }));
    // .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { cast, url } = this.state;
    console.log(cast);
    return (
      <div>
        {cast && (
          <ul>
            {cast.map(({ name, profile_path, character, id }) => (
              <li key={id}>
                <img src={url + profile_path} alt={name} width="150" />
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

// import React from "react";
// import { Link, withRouter } from "react-router-dom";

// const Cast = ({ movies, location }) => {
//   return (
//     <ul className="CastList">
//       {movies.map(({ id, title }) => (
//         <li key={id}>
//           <Link
//             to={{
//               pathname: `/movies/${id}`,
//               state: { from: location },
//             }}
//           >
//             {title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default withRouter(Cast);
