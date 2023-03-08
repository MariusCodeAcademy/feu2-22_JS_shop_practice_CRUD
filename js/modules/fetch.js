export const prodUrl = 'https://dummyjson.com/products';

export function getData(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch(console.warn);
}

export function postData(url, whatToPost) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(whatToPost),
  })
    .then((resp) => resp.json())
    .then((postResult) => postResult)
    .catch(console.warn);
}
