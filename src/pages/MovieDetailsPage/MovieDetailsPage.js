import React, { Component } from "react";
import routes from "../../../src/routes";
import fetchMovieDetail from "../../services/apiMovieDetails";

class MovieDetailsPage extends Component {
  state = {
    genre: null,
    id: null,
    title: null,
  };

  componentDidMount() {
    // this.getData();
  }

  getData = () => {
    const { movieId } = this.props.match.params;
    return fetchMovieDetail(movieId)
      .then((results) => {
        this.setState({ results });
      })
      .catch((error) => this.setState({ error }));
    // .finally(() => this.setState({ isLoading: false }));
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { imgUrl, title, author, descr } = this.state;

    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад
        </button>

        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>{descr}</p>
      </div>
    );
  }
}

export default MovieDetailsPage;
