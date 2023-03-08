import { shopItemsList } from '../main.js';
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

export function makeOneSingleItem(shopItemObj) {}

export function render(arr) {
  shopItemsList.innerHTML = '';
  arr.map(makeOneItem).forEach((liEl) => shopItemsList.append(liEl));
}
