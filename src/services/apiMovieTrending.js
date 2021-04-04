import axios from "axios";

export default function getFetch(page) {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
  let key = `f4c67ae87f1aa2e929a998967bea3a43`;
  let url = `trending/movie/day?&page=${page}&api_key=${key}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.results)
    .catch((error) => console.log(error));
}

// export default getFetch;
