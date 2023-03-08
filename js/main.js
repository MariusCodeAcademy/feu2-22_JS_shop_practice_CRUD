import { getData, prodUrl } from './modules/fetch.js';
import { render } from './modules/generate.js';

async function app() {
  let mainShopItemsArr = [];
  console.log('app started');
  // gaunam produktus
  const { products } = await getData(prodUrl);
  console.log('got products from api');
  // console.log('products ===', JSON.stringify(products, null, 2));
  mainShopItemsArr = products;
  // console.log('one item', JSON.stringify(mainShopItemsArr[0], null, 2));
  // sugeneruojam sarasa
  render(mainShopItemsArr);
  console.log('products rendered');
}

app();
