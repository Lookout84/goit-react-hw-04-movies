import React, { Component } from "react";
import { fetchMovieDetail } from "../../services/apiMoviesFetch";
import DetalisList from "../../components/DetalisList/DetalisList";
import { NavLink } from "react-router-dom";
import addRoutes from "../../../src/addRoutes";
import RoutesDetalies from "../../components/RoutesDetalis";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
// import routes from "../../../src/routes";

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

  // handleGoBack = () => {
  //   const { location, history } = this.props;
  //   history.push(location?.state?.from ?? routes.movies);
  // };

  handleGoBack() {
    this.props.history.goBack();
  }

  constructor(props) {
    super(props);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  render() {
    const { match } = this.props;
    const { movie, genres, url, id } = this.state;
    return (
      <>
        <Button
          variant="primary"
          type="button"
          onClick={this.handleGoBack}
          className="mb-1"
        >
          Go Back
        </Button>
        <Container>
          <DetalisList movie={movie} genres={genres} url={url} />
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Card style={{ width: "40rem" }}>
                <Card.Body>
                  <Card.Title>Additional information</Card.Title>
                </Card.Body>
                <Card.Body>
                  {addRoutes.map(({ exact, name, url }) => (
                    <Card.Link
                      key={name}
                      as={NavLink}
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
                    </Card.Link>
                  ))}
                </Card.Body>
                <RoutesDetalies />
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  onClick: PropTypes.func,
  movie: PropTypes.object,
  url: PropTypes.string,
};
