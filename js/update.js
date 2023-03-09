import { getParam } from './modules/helper.js';
import { prodUrl, getData } from './modules/fetch.js';

const formEl = document.forms[0];

// event listenerrs
formEl.addEventListener('submit', updateItemHandler);

const app = async () => {
  // 1. gauti id is query params
  const updateItemId = getParam('updateId');
  // 2. sugeneruoti url su id
  const updUrlWithId = `${prodUrl}/${updateItemId}`;
  console.log('updUrlWithId ===', updUrlWithId);
  // 3. parsisiusti objekta is dummy json. iskonsolinti objekta
  const itemFromApi = await getData(updUrlWithId);
  console.log('itemFromApi ===', itemFromApi);
  // 4. supildyti formos inputu values, su gautais duomenimis
  fillFromValues(itemFromApi);
};
app();

function fillFromValues(objFromApi) {
  // uzpildyti title intpu reiksme ?
  // formEl.elements.title.value = objFromApi.title;
  // formEl.elements.price.value = objFromApi.price;
  // formEl.elements.description.value = objFromApi.description;

  const fields = ['title', 'description', 'price', 'discountPercentage', 'category', 'thumbnail'];
  fields.forEach((field) => {
    formEl.elements[field].value = objFromApi[field];
  });
  console.log('tapsnojam sau per peti');
}

function updateItemHandler() {
  // sustabdyti perkrovima
  // paimti reiksmes
  // iskonsolinti reikmes
  // siusti putRequest
}
