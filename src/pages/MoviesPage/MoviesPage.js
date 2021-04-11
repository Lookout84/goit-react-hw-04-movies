import React, { Component } from "react";
import { getFetchMoviesSearch } from "../../services/apiMoviesFetch";
import MoviesList from "../../components/MoviesList/MoviesList";
import Button from "../../components/Button/Button";
import PropTypes from "prop-types";

class MoviesPage extends Component {
  state = {
    queryValue: "",
    movies: {},
    page: 1,
    error: false,
    isLoading: false,
  };

  componentDidMount() {
    const { queryValue } = this.state;
    if (queryValue) {
      getFetchMoviesSearch(queryValue).then((movies) =>
        this.setState({ movies })
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryValue !== this.state.queryValue) {
      this.getData();
    }
  }

  getData = () => {
    const { queryValue } = this.state;
    const { page } = this.state;
    return getFetchMoviesSearch(page, queryValue)
      .then((results) => {
        console.log(results);
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

  validateInput = (value) => {
    if (value.trim() !== "") {
      this.setState({ queryValue: value });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { queryValue } = e.target;
    this.validateInput(queryValue.value);
    queryValue.value = "";
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="queryValue" placeholder="Search Movie" />
          <button type="submit" onSubmit={this.onSubmit}>
            Search
          </button>
        </form>
        <ul>{movies.length > 0 && <MoviesList movies={movies} />}</ul>
        {movies.length > 0 && <Button onClick={this.nextPageButton} />}
      </>
    );
  }
}

export default MoviesPage;

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
  movies: PropTypes.object,
};
