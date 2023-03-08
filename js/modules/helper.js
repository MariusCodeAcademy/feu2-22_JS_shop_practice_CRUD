/**
 * Returs query param from URL
 * @param {string} param
 * @returns param value
 * getParam('id');
 */
export function getParam(param) {
  let queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(param);
}
