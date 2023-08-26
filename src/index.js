import {fetchBreeds} from "./js/cat-api";

const refs = {
  select: document.querySelector('.breed-select'),
  area: document.querySelector('.cat-info'),
}

fetchBreeds().then(addOptions);

function addOptions(data) {
  let options = "";

  data.forEach(({id, name}) => {
    options += `<option value="${id}">${name}</option>`
  });

  refs.select.innerHTML = options;
}
