import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
let key = `f4c67ae87f1aa2e929a998967bea3a43`;

export function getFetchTrending(page) {
  let url = `trending/movie/day?&page=${page}&api_key=${key}`;
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.results)
    .catch((error) => console.log(error));
}

export function getFetchMoviesSearch(page, query) {
    let url = `search/movie?&page=${page}&api_key=${key}&query=${query}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .then((data) => data.results)
      .catch((error) => console.log(error));
  }

export function fetchMovieDetail(id) {
  let url = `movie/${id}?api_key=${key}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function getFetchCast(id) {
  let url = `movie/${id}/credits?api_key=${key}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.cast)
    .catch((error) => console.log(error));
}

export function getFetchReviews(id) {
  let url = `movie/${id}/reviews?api_key=${key}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.results)
    .catch((error) => console.log(error));
}
