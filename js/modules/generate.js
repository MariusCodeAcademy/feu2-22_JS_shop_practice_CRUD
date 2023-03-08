import { shopItemsList } from './elements.js';
/*
<li class="shopItem">
  <div class="shopItemTop">
    <img src="/img/prod-1.png" alt="item image">
    <span>sale</span>
  </div>
  <div class="shopItemInfo">
    <h3 class="title">Yellow Reserved Hoodie</h3>
    <p class="category">Dress</p>
    <p class="price onSale"><span class="salePrice">$364.00</span>$155.00</p>
  </div>
</li>
*/

export function makeOneItem(shopItemObj) {
  // sukurti isorini li create element
  const liEl = document.createElement('li');
  liEl.className = 'shopItem';
  // suskaiciuoti kaina
  // is kainos atimam discount procenta
  const priceAfterDiscount =
    shopItemObj.price - shopItemObj.price * (shopItemObj.discountPercentage / 100);
  // vidu sukurti su innerHtml
  liEl.innerHTML = `
    <div class="shopItemTop">
      <a href="/single-product.html?itemId=${shopItemObj.id}">
        <img src="${shopItemObj.thumbnail}" alt="${shopItemObj.title}">
        <span>sale</span>
      </a>
    </div>
    <div class="shopItemInfo">
      <h3 class="title">${shopItemObj.title}</h3>
      <p class="category">${shopItemObj.category}</p>
      <p class="price onSale"><span class="salePrice">$${shopItemObj.price.toFixed(
        2
      )}</span>$${priceAfterDiscount.toFixed(2)}</p>
    </div>
  `;
  return liEl;
}

export function makeOneSingleItem(shopItemObj) {
  console.log('generating item');
  const divEl = document.createElement('div');
  divEl.className = 'shopItem singleProduct';
  divEl.innerHTML = `
  <div class="shopItemTop">
    <a href="/single-product.html">
      <img src="/img/prod-1.png" alt="item image">
      <span>sale</span>
    </a>
  </div>
  <div class="shopItemInfo">
    <h3 class="title ">Yellow Reserved Hoodie</h3>
    <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque alias ea earum
      voluptate quidem, impedit ex eveniet? Omnis quibusdam enim non cupiditate quam quaerat exercitationem, nisi
    </p>
    <p class="category">Dress</p>
    <p class="price onSale"><span class="salePrice">$364.00</span>$155.00</p>
    <button>Buy now</button>
    <button>Add to cart</button>
  </div>
  `;
  return divEl;
}

export function render(arr) {
  if (shopItemsList) {
    shopItemsList.innerHTML = '';
    arr.map(makeOneItem).forEach((liEl) => shopItemsList.append(liEl));
  }
}
