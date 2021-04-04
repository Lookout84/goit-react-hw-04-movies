import React, { Component } from "react";
import getFetch from "../../services/apiMovieTrending";

// const { getFetch } = MovieTrending;
class HomePage extends Component {
  state = {
    movies: {},
    page: 1,
    error: false,
    isLoading: false,
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const { page } = this.state;
    return getFetch(page)
      .then((movies) => {
        console.log(movies);
        this.setState({
          movies: [...movies],
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <>
        <ul>
          {movies.map((movie) => {
            return <li key={movie.id}>{movie.original_title}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default HomePage;
