const yearElement = document.querySelector('time');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;