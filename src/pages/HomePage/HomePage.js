import React, { Component } from "react";
import { getFetchTrending } from "../../services/apiMoviesFetch";
import PrevButton from "../../components/Button/PrevButton";
import NextButton from "../../components/Button/NextButton";
import MoviesList from "../../components/MoviesList/MoviesList";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

class HomePage extends Component {
  state = {
    movies: {},
    page: 1,
    error: false,
    isLoading: false,
    url: "https://image.tmdb.org/t/p/w500",
  };

  componentDidMount() {
    this.getData();
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  }

  getData = () => {
    const { page } = this.state;
    return getFetchTrending(page)
      .then((results) => {
        this.setState({
          movies: [...results],
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  nextPageButton = () => {
    this.getData();
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  prevPageButton = () => {
    this.getData();
    this.setState((prevState) => ({
      page: prevState.page - 1,
    }));
  };

  render() {
    const { movies, url, page } = this.state;
    return (
      <>
        {movies.length > 0 && <MoviesList movies={movies} url={url} />}
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col md="auto">
              {page > 2 && <PrevButton onClick={this.prevPageButton} />}
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
export default HomePage;  

HomePage.propTypes = {
  onClick: PropTypes.func,
  movies: PropTypes.object,
  url: PropTypes.string,
};
