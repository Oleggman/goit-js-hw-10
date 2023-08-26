import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Vc0UBn8V9fjNTSwaOGE0sEkBZGz8ypaOzHaAKEiCjQHRRZAHnApsT3NCrSphubrd";
const URL = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds() {
  return axios('https://api.thecatapi.com/v1/breeds').then(response => response.data);
}

function fetchCatByBreed(breedId) {
  return axios(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
         .then(console.log);
}

export { fetchBreeds, fetchCatByBreed };