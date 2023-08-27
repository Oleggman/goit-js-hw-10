import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const refs = {
  select: document.querySelector('.breed-select'),
  area: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
}

refs.area.style.display = "none"
refs.select.addEventListener('change', onSelect);

fetchBreeds().then(addOptions).finally(onRenderOptions);

function addOptions(data) {
  const options = data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');

  refs.select.innerHTML = options;
}

function onRenderOptions() {
  refs.select.classList.remove("hidden");
  refs.loader.style.display = "none";
}

function onSelect(evt) {
  refs.loader.style.display = "inline-block";
  refs.area.style.display = "none";
  fetchCatByBreed(evt.target.value).then(renderCat).catch(console.log);
}

function renderCat({ data, url }) {
  const markup = `
    <div class="cat-thumb">
      <img class="cat-img" src="${url}" alt="${data.name}" width="500">
    </div>
    <div class="cat-description">
      <h2 class="cat-name">${data.name}</h2>
      <p class="cat-desc">${data.description}</p>
      <p class="cat-temp">${data.temperament}</p>
    </div>`;

  refs.area.style.display = "flex";
  refs.area.innerHTML = markup;
  refs.loader.style.display = "none";
}