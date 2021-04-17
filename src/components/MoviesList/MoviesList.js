import React from "react";
import { Card, CardColumns, Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const imgError = `https://i.ibb.co/TTCCj2F/img-error.png`;
const MoviesList = ({ movies, location, url }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {movies.map(({ id, title, poster_path }) => (
          <Col xs={6} md={4} key={id}>
            <CardColumns className="mr-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={poster_path ? `${url + poster_path}` : `${imgError}`}
                  alt={title}
                  width="200"
                  height="auto"
                />
                <Card.Body>
                  <Card.Title
                    as={Link}
                    to={{
                      pathname: `/movies/${id}`,
                      state: { from: location },
                    }}
                  >
                    {title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardColumns>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default withRouter(MoviesList);
