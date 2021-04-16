import React, { Component } from "react";
import { getFetchCast } from "../../services/apiMoviesFetch";
import imgError from "../../img/img-error.png";
import { Card, Container, Col, Row, CardColumns } from "react-bootstrap";

class Cast extends Component {
  state = {
    cast: [],
    url: "https://image.tmdb.org/t/p/w500",
    isLoading: false,
  };

  componentDidMount() {
    this.getCast();
  }

  getCast = () => {
    const movieId = this.props.location.state.id;
    return getFetchCast(movieId)
      .then((results) => {
        console.log(results);
        this.setState({ cast: [...results] });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { cast, url } = this.state;
    return (
      <Container>
        <Card.Title>Cast</Card.Title>
        <Row className="justify-content-md-center">
          {cast.map(({ name, profile_path, character, id }) => (
            <Col xs={8} md={6} key={id}>
              <CardColumns>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={profile_path ? `${url + profile_path}` : `${imgError}`}
                    alt={name}
                    width="50"
                    height="auto"
                  />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Character: {character}</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Cast;

// <div>
//   <h4>Cast</h4>
//   {cast.length > 0 && (
//     <ul>
//       {cast.map(({ name, profile_path, character, id }) => (
//         <li key={id}>
//           <img
//             src={profile_path ? `${url + profile_path}` : `${imgError}`}
//             alt={name}
//             width="150"
//             />
//           <p>{name}</p>
//           <p>Character: {character}</p>
//         </li>
//       ))}
//     </ul>
//   )}
// </div>
