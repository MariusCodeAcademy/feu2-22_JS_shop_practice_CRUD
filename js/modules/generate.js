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
  // vidu sukurti su innerHtml
  liEl.innerHTML = `
    <div class="shopItemTop">
      <img src="/img/prod-1.png" alt="item image">
      <span>sale</span>
    </div>
    <div class="shopItemInfo">
      <h3 class="title">Yellow Reserved Hoodie</h3>
      <p class="category">Dress</p>
      <p class="price onSale"><span class="salePrice">$364.00</span>$155.00</p>
    </div>
  `;
  return liEl;
}

export function render(arr) {
  shopItemsList.innerHTML = '';
  arr.map(makeOneItem).forEach((liEl) => shopItemsList.append(liEl));
}
