import axios from "axios";

export default function getFetchCast(id) {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
  let key = `f4c67ae87f1aa2e929a998967bea3a43`;
  let url = `movie/${id}/credits?api_key=${key}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.cast)
    .catch((error) => console.log(error));
}