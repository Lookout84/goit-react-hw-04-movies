import axios from "axios";

export default function fetchMovieDetail(id) {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
  let key = `f4c67ae87f1aa2e929a998967bea3a43`;
  const url = `movie/${id}?api_key=${key}`;

  return axios
    .get(url)
    .then((response) => response)
    .catch((error) => console.log(error));
}
