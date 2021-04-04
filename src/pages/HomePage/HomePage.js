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

  // componentDidUpdate(prevProps, prevState){
  //   if (prevState.movies !== this.state.movies) {
  //     this.getData();
  // }
// }
  getData = () => {
    const { page } = this.state;
    return getFetch(page)
      .then((results) => {
        console.log(results);
        this.setState({ movies: results });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies } = this.state;
    console.dir(movies);
    return (
      <>
        <ul>
          {movies.map((movie) => {
            console.log(movie);
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default HomePage;
