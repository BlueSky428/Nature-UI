import '@testing-library/jest-dom/extend-expect';
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
