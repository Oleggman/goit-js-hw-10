import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.headers.common["x-api-key"] = "live_Vc0UBn8V9fjNTSwaOGE0sEkBZGz8ypaOzHaAKEiCjQHRRZAHnApsT3NCrSphubrd";

const BREED_URL = 'https://api.thecatapi.com/v1/breeds';
const CAT_URL = 'https://api.thecatapi.com/v1/images/search';
const ERROR_MESSAGE = "Oops! Something went wrong! Try reloading the page\n";

function fetchBreeds() {
  return axios(BREED_URL).then(response => response.data).catch(error => Notiflix.Notify.failure(ERROR_MESSAGE));
}

function fetchCatByBreed(breedId) {
  return axios(`${CAT_URL}?breed_ids=${breedId}`).then(response => {
    const url = response.data[0].url;
    const data = response.data[0].breeds[0];
    return { data, url };
  }).catch(error => Notiflix.Notify.failure(ERROR_MESSAGE));
}

export { fetchBreeds, fetchCatByBreed };