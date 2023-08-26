import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const refs = {
  select: document.querySelector('.breed-select'),
  area: document.querySelector('.cat-info'),
}

refs.select.style.display = "none";
refs.select.addEventListener('change', onSelect);

fetchBreeds().then(addOptions).finally(() => refs.select.style.display = "inline-block");

function addOptions(data) {
  let options = "";

  data.forEach(({id, name}) => {
    options += `<option value="${id}">${name}</option>`
  });

  refs.select.innerHTML = options;
}

function onSelect(evt) {
  fetchCatByBreed(evt.target.value).then(renderCat).catch(console.log);
}

function renderCat({ data, url }) {
  const markup = `
    <img src="${url}" alt="${data.name}" width="500">
    <h2>${data.name}</h2>
    <p>${data.description}</p>
    <p>${data.temperament}</p>`;

  refs.area.innerHTML = markup;
}