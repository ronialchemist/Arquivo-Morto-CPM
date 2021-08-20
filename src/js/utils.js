const selectElement = element => document.querySelector(element);
const selectAllElements = element => document.querySelectorAll(element);

const activateCurrentButton = (parentElementId, childElements, bttnId) => {
  selectElement(parentElementId).querySelectorAll(childElements).forEach(element => {
    if (element.id === bttnId) {
      element.setAttribute('class', 'navbar__link navbar__link--active');
    } else {
      element.setAttribute('class', 'navbar__link');
    }
  });
}