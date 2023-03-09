import { getParam } from './modules/helper.js';
import { prodUrl, getData, updateData } from './modules/fetch.js';
import { inputsToObject } from './modules/form.js';

const formEl = document.forms[0];

let updUrlWithId = '';

// event listenerrs
formEl.addEventListener('submit', updateItemHandler);

const app = async () => {
  // 1. gauti id is query params
  const updateItemId = getParam('updateId');
  // 2. sugeneruoti url su id
  updUrlWithId = `${prodUrl}/${updateItemId}`;
  console.log('updUrlWithId ===', updUrlWithId);
  // 3. parsisiusti objekta is dummy json. iskonsolinti objekta
  const itemFromApi = await getData(updUrlWithId);
  console.log('itemFromApi ===', itemFromApi);
  // 4. supildyti formos inputu values, su gautais duomenimis
  fillFromValues(itemFromApi);
};
app();
const fields = ['title', 'description', 'price', 'discountPercentage', 'category', 'thumbnail'];

function fillFromValues(objFromApi) {
  // uzpildyti title intpu reiksme ?
  // formEl.elements.title.value = objFromApi.title;
  // formEl.elements.price.value = objFromApi.price;
  // formEl.elements.description.value = objFromApi.description;

  fields.forEach((field) => {
    formEl.elements[field].value = objFromApi[field];
  });
  console.log('tapsnojam sau per peti');
}

async function updateItemHandler(e) {
  // sustabdyti perkrovima
  e.preventDefault();

  // paimti reiksmes
  const updatedItemObj = inputsToObject(formEl, fields);
  // iskonsolinti reikmes
  console.log('updatedItemObj ===', updatedItemObj);
  // siusti putRequest
  const [sekme, klaida] = await updateData(updUrlWithId, updatedItemObj);
  if (klaida) {
    // klaida
    console.log('pranesti apie klaida');
    return;
  }
  if (sekme) {
    console.log('sekme ===', sekme);
    console.log('redirect i prekes page');
  }
}
