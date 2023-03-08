import { getData } from './modules/fetch.js';

const prodUrl = 'https://dummyjson.com/products';

async function app() {
  let mainShopItemsArr = [];
  console.log('app started');

  const { products } = await getData(prodUrl);
  console.log('products ===', products);
  mainShopItemsArr = products;
}

app();
