import { getParam } from './modules/helper.js';
import { prodUrl, getData } from './modules/fetch.js';
import { makeOneSingleItem } from './modules/generate.js';
import { singleItemDiv } from './modules/elements.js';

async function app() {
  console.log('single app started');

  // get id from query params// gauti query params

  // const paramObj = new URLSearchParams(window.location.search);
  // let itemIdFromQuery = paramObj.get('itemId');
  // console.log('itemIdFromQuery ===', itemIdFromQuery);

  const itemIdFromQuery = getParam('itemId');
  // console.log('itemIdFromQuery ===', itemIdFromQuery);

  // console.log('prodUrl ===', prodUrl);
  const urlForCurrentProductIs = `${prodUrl}/${itemIdFromQuery}`;
  console.log('urlForCurrentProductIs ===', urlForCurrentProductIs);

  // parsisiusti itema is api
  const currentItemObj = await getData(urlForCurrentProductIs);
  console.log('currentItemObj ===', currentItemObj);
  // sugeneruoti ji htmle
  const itemHtmlEl = makeOneSingleItem(currentItemObj);
  // patalpinti itemHtmlEl i dom
  singleItemDiv.append(itemHtmlEl);
}
app();
