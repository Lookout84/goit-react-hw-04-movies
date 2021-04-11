import React, { Component } from "react";
import { getFetchTrending } from "../../services/apiMoviesFetch";
import Button from "../../components/Button/Button";
import MoviesList from "../../components/MoviesList/MoviesList";
import PropTypes from "prop-types";

class HomePage extends Component {
  state = {
    movies: {},
    page: 1,
    error: false,
    isLoading: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { page } = this.state;
    return getFetchTrending(page)
      .then((results) => {
        this.setState((prevState) => ({
          movies: [...results],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  nextPageButton = () => {
    this.getData();
  };

  render() {
    const { movies } = this.state;
    console.dir(movies);
    return (
      <>
        <ul>{movies.length > 0 && <MoviesList movies={movies} />}</ul>
        <Button onClick={this.nextPageButton} />
      </>
    );
  }
}
export default HomePage;

HomePage.propTypes = {
  onClick: PropTypes.func,
  movies: PropTypes.object,
};
