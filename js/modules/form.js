/**
 *
 * @param {HTMLFormElement} formElement
 * @param {Array} fieldsArr
 * @returns object from form values
 */
export function inputsToObject(formElement, fieldsArr) {
  return fieldsArr.reduce((acc, field) => {
    acc[field] = formElement.elements[field].value.trim();
    return acc;
  }, {});
}
