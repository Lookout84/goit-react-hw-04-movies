import React, { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { getFetchReviews } from "../../services/apiMoviesFetch";

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    const movieId = this.props.location.state.id;
    return getFetchReviews(movieId)
      .then((results) => {
        this.setState({ reviews: [...results] });
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { reviews } = this.state;
    return (
      <Container>
        <Card.Title>Reviews</Card.Title>
        <Row className="justify-content-md-center">
          {reviews.length > 0 ? (
            <Card>
              {reviews.map(({ author, content, id }) => (
                <Card.Body key={id}>
                  <Card.Title>Author: {author}</Card.Title>
                  <Card.Text>{content}</Card.Text>
                </Card.Body>
              ))}
            </Card>
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </Row>
      </Container>
    );
  }
}

export default Reviews;
