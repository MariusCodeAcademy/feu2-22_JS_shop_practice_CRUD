const formEl = document.forms[0];

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(e) {
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
}

function app() {}
