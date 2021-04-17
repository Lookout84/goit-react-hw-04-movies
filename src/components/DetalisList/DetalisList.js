import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const imgError = `https://i.ibb.co/TTCCj2F/img-error.png`;

const DetalisList = ({ movie, genres, url }) => {
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "40rem" }} key={movie.id}>
            <Card.Img
              variant="top"
              src={
                movie.poster_path ? `${url + movie.poster_path}` : `${imgError}`
              }
              alt={movie.title}
              width="500"
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                Overview: {movie.overview || "This movie has no overview yet."}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                User score: {movie.vote_average * 10}%
              </ListGroupItem>
              <ListGroupItem>Genres: {genres}</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalisList;

//  {/* <div key={movie.id} className={s.DetalisMovie}>
//   <img
//     className={s.Image}
//     src={movie.poster_path ? `${url + movie.poster_path}` : `${imgError}`}
//     alt={movie.title}
//     width="500"
//   />
//   <h2>{movie.title}</h2>
//   <h3>User score: </h3>
//   <p>{movie.vote_average * 10}%</p>
//   <h3>Genres: </h3>
//   <p>{genres}</p>
//   <h3>Overview: </h3>
//   <p>{movie.overview || "This movie has no overview yet."}</p>
// </div> */}
