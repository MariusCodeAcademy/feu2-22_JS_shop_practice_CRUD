export const prodUrl = 'https://dummyjson.com/products';

export function getData(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch(console.warn);
}
