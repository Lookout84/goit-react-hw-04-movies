import axios from 'axios'

axios.defaults.baseURL = `https://www.thecocktaildb.com/api/json/v1/1/`

export function getCocktail(search) {
  const url = `search.php?s=${search}`
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.drinks)
    .catch((error) => console.log(error))
}
