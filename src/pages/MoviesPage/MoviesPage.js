import React, { Component } from "react";
import { getFetchMoviesSearch } from "../../services/apiMoviesFetch";
import MoviesList from "../../components/MoviesList/MoviesList";
import NextButton from "../../components/Button/Button";
import PropTypes from "prop-types";
import {
  InputGroup,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

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
    const { movies, url } = this.state;
    return (
      <>
        <Container fluid="md" className="mb-3">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form onSubmit={this.onSubmit}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search Movie"
                    aria-label="Search Movie"
                    aria-describedby="basic-addon2"
                    type="text"
                    name="queryValue"
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      type="submit"
                      onSubmit={this.onSubmit}
                    >
                      Search
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
        <ul>{movies.length > 0 && <MoviesList movies={movies} url={url} />}</ul>
        {movies.length > 0 && <NextButton onClick={this.nextPageButton} />}
      </>
    );
  }
}

export default MoviesPage;

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
  movies: PropTypes.object,
};

// {/* <form onSubmit={this.onSubmit}>
//   <input type="text" name="queryValue" placeholder="Search Movie" />
//   <button type="submit" onSubmit={this.onSubmit}>
//     Search
//   </button>
// </form> */}
