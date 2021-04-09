import React, { Component } from "react";
import {getFetchReviews} from "../../services/apiMoviesFetch";

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    const movieId = this.props.location.state.id;
    return getFetchReviews(movieId)
      .then((results) => {
        console.log(results);
        this.setState({ reviews: [...results] });
      })
      .catch((error) => this.setState({ error }));
    // .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
      <h4>Reviews</h4>
      {reviews.length >0 ?
        (<ul>
            {reviews.map(({author, content, id})=> (
                <li key={id}>
                    <h3>Author: {author}</h3>
                    <p>{content}</p>
                </li>
            ))}
        </ul>) : <p>We don't have any reviews for this movie</p>
      
      }
      </>
    );
  }
}

export default Reviews;
