import { postData } from './modules/fetch.js';

const formEl = document.forms[0];
const addUrl = 'https://dummyjson.com/products/add';

formEl.addEventListener('submit', formSubmitHandler);

async function formSubmitHandler(e) {
  e.preventDefault();
  console.log('formSubmitHandler ivyko');

  const newItemObj = {
    title: formEl.elements.title.value.trim(),
    description: formEl.elements.description.value.trim(),
    price: formEl.elements.price.value.trim(),
    discountPercentage: formEl.elements.discountPercentage.value.trim(),
    category: formEl.elements.category.value.trim(),
    thumbnail: formEl.elements.thumbnail.value.trim(),
  };
  console.log('newItemObj ===', newItemObj);

  // validation

  // siusti duomenis
  const [sekme, klaida] = await postData(addUrl, newItemObj);
  if (klaida) {
    // klaida
    console.log('pranesti apie klaida');
    return;
  }
  if (sekme) {
    console.log('redirect i index.html');
  }
}

function app() {}
