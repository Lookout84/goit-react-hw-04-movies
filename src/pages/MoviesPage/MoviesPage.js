import React, { Component } from "react";
import { getFetchMoviesSearch } from "../../services/apiMoviesFetch";
import MoviesList from "../../components/MoviesList/MoviesList";
import NextButton from "../../components/Button/NextButton";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import FormSearch from "../../components/Form/FormSearch";
import qString from "query-string";

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
    const { search, pathname } = this.props.location;
    if (search && pathname) {
      this.setState({
        queryValue: qString.parse(search).query,
      });
    }
    // const { queryValue } = this.state;
    // if (queryValue) {
    //   getFetchMoviesSearch(queryValue).then((movies) =>
    //     this.setState({ movies })
    //   );
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryValue !== this.state.queryValue) {
      this.setState({ page: 1 });
      this.getData();
    }
  }

  changeQuery = (query) => {
    const { history, location } = this.props;
    this.setState({
      queryValue: query,
      movies: {},
    });
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

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

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const { queryValue } = e.target;
  //   this.validateInput(queryValue.value);
  //   queryValue.value = "";
  // };

  render() {
    const { movies, url } = this.state;
    return (
      <>
        <FormSearch onSubmit={this.changeQuery} />
        <Container>
          {movies.length > 0 && <MoviesList movies={movies} url={url} />}
        </Container>
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col md="auto">
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
  onClick: PropTypes.func,
  movies: PropTypes.object,
};
