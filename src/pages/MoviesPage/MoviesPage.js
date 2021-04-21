import React, { Component } from "react";
import { getFetchMoviesSearch } from "../../services/apiMoviesFetch";
import MoviesList from "../../components/MoviesList/MoviesList";
import PrevButton from "../../components/Button/PrevButton";
import NextButton from "../../components/Button/NextButton";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import routes from "../../../src/routes";
import FormSearch from "../../components/Form/FormSearch";

class MoviesPage extends Component {
  state = {
    queryValue: "",
    movies: {},
    page: 1,
    error: false,
    isLoading: false,
    url: "https://image.tmdb.org/t/p/w500",
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
    const { queryValue, page } = this.state;
    return getFetchMoviesSearch(page, queryValue)
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

  prevPageButton = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
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
    // this.setState((prevState) => ({
    //   page: prevState.page,
    // }));
  };

  render() {
    const { movies, url, page } = this.state;
    console.log(movies);
    console.log(page);
    return (
      <>
        <FormSearch onSubmit={this.onSubmit} />
        <Container>
          {movies.length > 0 && <MoviesList movies={movies} url={url} />}
        </Container>
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col md="auto">
              {page > 1 && <PrevButton onClick={this.prevPageButton} />}
              {movies.length >= 20 && (
                <NextButton onClick={this.nextPageButton} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MoviesPage;

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
  movies: PropTypes.object,
};
