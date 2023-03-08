import { getData } from './modules/fetch.js';
import { render } from './modules/generate.js';

const prodUrl = 'https://dummyjson.com/products';

// taikomes
export const shopItemsList = document.getElementById('shopItemsList');

async function app() {
  let mainShopItemsArr = [];
  console.log('app started');
  // gaunam produktus
  const { products } = await getData(prodUrl);
  console.log('products ===', products);
  mainShopItemsArr = products;
  // sugeneruojam sarasa
  render(mainShopItemsArr);
}

app();
